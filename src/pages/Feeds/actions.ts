import { createAsyncAction } from "../../redux/redux";

export const { getArticleList, getArticleListSuccess, getArticleListFail } = createAsyncAction(
  'getArticleList'
);
