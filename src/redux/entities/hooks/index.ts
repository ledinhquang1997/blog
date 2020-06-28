import { EntitiesName } from "../constants";
import { useSelector } from "react-redux";
import { entitySelector } from "../selectors";

export const useEntity = (name: EntitiesName, id: string) => {
  const entity = useSelector(entitySelector(name, id));
  return entity;
};
