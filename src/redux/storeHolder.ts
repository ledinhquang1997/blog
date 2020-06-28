import { Store } from "redux";
let store: Store | null = null;

export default {
  getStore: () => {
    return store;
  },
  setStore: (s: Store) => {
    store = s;
  },
};
