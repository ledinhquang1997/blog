export const stateContext = "tags";

export interface TagsState {
  action: string | any;
  error: object | any;
  data: string[];
  selected: string[];
}

export const initialState: TagsState = {
  action: null,
  error: null,
  data: [],
  selected: [],
};
