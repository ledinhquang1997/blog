import { useDispatch, useSelector } from "react-redux";
import { getArticleList } from "../actions";
import { ArticlesState } from "../state";
import { articleListStateSelector } from "../selectors";

export const useDispatchLoadArticles =() => {
  const dispatch = useDispatch();
  return () => dispatch(getArticleList());
};

export const useArticleListState = () =>{
    const state: ArticlesState = useSelector(articleListStateSelector)
    return state;
}