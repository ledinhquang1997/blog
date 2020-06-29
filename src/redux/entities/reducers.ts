import { handleActions, Action } from "redux-actions";
import { updateEntities } from "./actions";
import { initialState } from "./state";
import { createReducers } from "../redux";
import { stateContext } from "./state";

export const entitiesReducers = handleActions(
  {
    updateEntities: (
      state: { [key: string]: object } | any,
      action: Action<{
        [entityName: string]: { [entityId: string]: object };
      }>
    ): { [key: string]: object } => {
      if (!action.payload) {
        return state;
      }
      for (const entityName of Object.keys(action.payload)) {
        for (const entityId of Object.keys(action.payload[entityName])) {
          state[entityName] = state[entityName] || {};
          state[entityName][entityId] = {
            ...(state[entityName][entityId] || {}),
            ...action.payload[entityName][entityId],
          };
        }
      }
      return state;
    },
  } as any,
  initialState
);

export default createReducers(stateContext, entitiesReducers);
