import { stateContext } from "./state";

export const articleListStateSelector = (state: any) => state[stateContext];
