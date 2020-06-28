export interface IPageableData<T> {
  total: number;
  data: T[];
}

interface NormalizeData {
  result: any;
  entities: {
    [entityName: string]: {
      [id: string]: any;
    };
  };
}
