import { useDispatch, useSelector } from "react-redux";
import { getTags, selectFilterTag, removeFilterTag } from "../actions";
import { stateContext, TagsState } from "../state";

export const useDispatchGetPopularTags = () => {
  const dispatch = useDispatch();
  return () => dispatch(getTags());
};

export const useDispatchSelectFilterTag = () => {
  const dispatch = useDispatch();
  return (tag: string) => dispatch(selectFilterTag(tag));
};

export const useDispatchRemoveFilterTag = () => {
  const dispatch = useDispatch();
  return (tag: string) => dispatch(removeFilterTag(tag));
};

export const useTagsState: TagsState | any = () => {
  return useSelector((state: any) => state[stateContext]);
};


export const useTagFilters: TagsState | any = () => {
    return useSelector((state: any) => state[stateContext]?.selected);
  };
  