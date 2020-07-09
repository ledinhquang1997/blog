import { createAsyncAction } from "../../../../redux/redux";
import { createAction } from "redux-actions";

export const { getTags, getTagsSuccess, getTagsFail } = createAsyncAction(
  "getTags"
);

export const selectFilterTag = createAction("selectFilterTag");
export const removeFilterTag = createAction("removeFilterTag");
