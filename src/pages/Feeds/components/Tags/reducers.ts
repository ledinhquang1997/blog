import { handleActions, Action } from "redux-actions";
import { initialState, TagsState } from "./state";
import {
  getTags,
  getTagsSuccess,
  getTagsFail,
  selectFilterTag,
} from "./actions";
import produce from "immer";
import { stateContext } from "./state";
import { createInjectableReducers } from "../../../../redux/redux";

const reducer = handleActions(
  {
    [getTags]: (state: TagsState, action: Action<{}>) => {
      return produce(state, (draft: TagsState) => {
        draft.action = action.type;
      });
    },
    [getTagsSuccess]: (state: TagsState, action: Action<any>) => {
      return produce(state, (draft: TagsState) => {
        draft.action = action.type;
        draft.data = action.payload;
      });
    },
    getTagsFail: (state: TagsState, action: Action<{}>) => {
      return produce(state, (draft: TagsState) => {
        draft.action = action.type;
        draft.error = action.error;
      });
    },
    selectFilterTag: (state: TagsState, action: Action<string>) => {
      return produce(state, (draft: TagsState) => {
        draft.action = action.type;
        draft.selected.push(action.payload);
      });
    },
    removeFilterTag: (state: TagsState, action: Action<string>) => {
      return produce(state, (draft: TagsState) => {
        draft.action = action.type;
        draft.selected = draft.selected.filter(
          (item) => item !== action.payload
        );
      });
    },
  },
  initialState
);

export default createInjectableReducers(stateContext, reducer);
