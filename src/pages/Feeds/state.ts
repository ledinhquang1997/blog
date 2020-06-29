export const stateContext = "articleList";

export interface ArticlesRequest {
  tag?: string | string[];
  author?: string | string[];
  favorited?: string | string[];
  limit?: number;
  offset?: number;
}

export interface ArticlesState {
  action: string | any;
  error: object | any;
  request: any;
  data: {
    total: number;
    data: string[];
  };
}

export const initialState: ArticlesState = {
  action: null,
  error: null,
  request: {
    limit: 20,
    offset: 0,
  },
  data: {
    total: 0,
    data: [],
  },
};
