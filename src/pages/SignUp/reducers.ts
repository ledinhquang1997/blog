import { handleActions, Action } from "redux-actions";
import produce from "immer";
import { createReducers, createInjectableReducers } from "../../redux/redux";

const reducer = handleActions({}, {});

export default createInjectableReducers("SignUp", reducer);