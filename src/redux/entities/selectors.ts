import { EntitiesName } from "./constants";
import { get } from "lodash";

export const entitySelector = (name: EntitiesName, id: string) => (
  state: any
) => {
  return get(state, `entities.${name}.${id}`) || {};
};
