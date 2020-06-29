import { createAction } from "redux-actions";
import { NormalizeData } from "../services/typings";
import { schema, normalize } from "normalizr";
export function createAsyncAction(action: string): any {
  return {
    [action]: createAction(action),
    [`${action}Success`]: createAction(`${action}_SUCCESS`),
    [`${action}Fail`]: createAction(`${action}_FAIL`),
  };
}

export function createReducers(stateContext: string, reducers: any): any {
  return {
    [stateContext]: reducers,
  };
}

export function createInjectableReducers(
  stateContext: string,
  reducers: any
): any {
  return {
    key: stateContext,
    reducer: reducers,
  };
}

export function createInjectableSaga(stateContext: string, saga: any) {
  return {
    key: stateContext,
    saga,
  };
}

export const normalizeData = (
  data: any,
  entityName: string,
  key?: string
): NormalizeData => {
  const articles = new schema.Entity(
    entityName,
    {},
    {
      idAttribute: !!key ? key : "id",
    }
  );
  const mySchema = { articles: [articles] };
  return normalize(data, mySchema);
};
