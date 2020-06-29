import { useDispatch, useSelector } from "react-redux";
import { getArticleList } from "../actions";
import { ArticlesState, ArticlesRequest } from "../state";
import { articleListStateSelector } from "../selectors";

export const useDispatchLoadArticles = () => {
  const dispatch = useDispatch();
  return (req?: ArticlesRequest) => dispatch(getArticleList(req));
};

export const useArticleListState = () => {
  const state: ArticlesState = useSelector(articleListStateSelector);
  return state;
};
