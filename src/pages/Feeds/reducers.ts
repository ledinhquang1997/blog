import { handleActions, Action } from "redux-actions";
import { initialState, ArticlesState, ArticlesRequest } from "./state";
import {
  getArticleList,
  getArticleListSuccess,
  getArticleListFail,
} from "./actions";
import produce from "immer";
import { createInjectableReducers } from "../../redux/redux";
import { stateContext } from "./state";

const reducer = handleActions(
  {
    [getArticleList]: (
      state: ArticlesState,
      action: Action<ArticlesRequest>
    ) => {
      return produce(state, (draft: ArticlesState) => {
        draft.action = action.type;
        draft.request = { ...state.request, ...action.payload };
      });
    },
    [getArticleListSuccess]: (state: ArticlesState, action: Action<any>) => {
      return produce(state, (draft: ArticlesState) => {
        draft.action = action.type;
        draft.data = action.payload;
      });
    },
    [getArticleListFail]: (state: ArticlesState, action: Action<{}>) => {
      return produce(state, (draft: ArticlesState) => {
        draft.action = action.type;
        draft.error = action.error;
      });
    },
  },
  initialState
);

export default createInjectableReducers(stateContext, reducer);
