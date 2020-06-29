import React from "react";
import { injectSagaBulk, injectReducerBulk } from "./createInjectSagasStore";
import { useStore, useDispatch } from "react-redux";
import { useEffect } from "react";
import { flatten } from "lodash";

export interface InjectedProps {
  sagas?: any[];
  reducers?: any[];
  // cleanUp?: boolean;
}

export const injector = (cfg: InjectedProps) => {
  return (Comp: any) => {
    const InjectedComp = (props: any) => {
      const store = useStore();
      injectSagaBulk(flatten(cfg.sagas), false, store);
      injectReducerBulk(flatten(cfg.reducers), store);
      return <Comp {...props} />;
    };
    return InjectedComp;
  };
};
