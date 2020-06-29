import createSagaMiddleware, { Saga } from "redux-saga";
import { take, fork, cancel } from "redux-saga/effects";
import {
  applyMiddleware,
  compose,
  combineReducers,
  createStore,
  Reducer,
  Store,
} from "redux";
import entitiesReducer from "../redux/entities/reducers";

export const CANCEL_SAGAS_HMR = "CANCEL_SAGAS_HMR";

interface IInjectedSaga {
  key: string;
  saga: Saga;
}

interface IInjectedReducer {
  key: string;
  reducer: Reducer;
}

function createAbortableSaga(key: string, saga: Saga) {
  if (process.env.NODE_ENV === "development") {
    return function* main() {
      const sagaTask = yield fork(saga);
      const { payload } = yield take(CANCEL_SAGAS_HMR);

      if (payload === key) {
        yield cancel(sagaTask);
      }
    };
  } else {
    return saga;
  }
}

export const SagaManager = {
  startSaga(key: string, saga: Saga, store: any) {
    if (!store.sagas) store.sagas = [];
    store.sagas.push(
      store.sagaMiddleware.run(createAbortableSaga(key, saga)).toPromise()
    );
  },

  cancelSaga(key: string, store: any) {
    //@ts-ignore
    store.dispatch({
      type: CANCEL_SAGAS_HMR,
      payload: key,
    });
  },
};

export function injectSagaBulk(
  sagas: IInjectedSaga[],
  force = false,
  store: any
) {
  sagas.forEach((x: IInjectedSaga) => {
    // If already set, do nothing, except force is specified
    //@ts-ignore
    const exists = store.injectedSagas.includes(x.key);
    if (!exists || force) {
      if (!exists) {
        //@ts-ignore
        store.injectedSagas = [...store.injectedSagas, x.key];
      }
      if (force) {
        SagaManager.cancelSaga(x.key, store);
      }
      SagaManager.startSaga(x.key, x.saga, store);
    }
  });
}

const buildMiddlewars = (middleware: any) => {
  if (process.env.NODE_ENV !== "production") {
    const sagaMiddleware = createSagaMiddleware();
    const { composeWithDevTools } = require("redux-devtools-extension");
    const composedMiddleware = composeWithDevTools(
      compose(applyMiddleware(sagaMiddleware, ...middleware))
    );
    return { sagaMiddleware, composedMiddleware };
  }
  const sagaMiddleware = createSagaMiddleware();
  const composedMiddleware = applyMiddleware(sagaMiddleware, ...middleware);
  return { sagaMiddleware, composedMiddleware };
};

function createReducer(asyncReducers: any, store: Store) {
  return combineReducers({
    ...entitiesReducer,
    ...asyncReducers,
  });
}

export const injectReducerBulk = (reducers: IInjectedReducer[], store: any) => {
  reducers.forEach((item: IInjectedReducer) => {
    store.asyncReducers[item.key] = item.reducer;
  });
  store.replaceReducer(createReducer(store.asyncReducers, store));
};


export function createInjectableSagasReducersStore(
  rootSagas: any,
  initialReducers: any,
  middlewares = [] as any[]
) {
  const { sagaMiddleware, composedMiddleware } = buildMiddlewars(middlewares);
  const store = createStore(
    combineReducers({...initialReducers}),
    composedMiddleware
  ) as any;

  // Add a dictionary to keep track of the registered async reducers
  store.asyncReducers = {};

  //@ts-ignore
  store.injectedSagas = [];
  //@ts-ignore
  store.sagaMiddleware = sagaMiddleware;
  injectSagaBulk(rootSagas, false, store);
  return store;
}

export default createInjectableSagasReducersStore;
