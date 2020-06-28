import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading-bar";
import entitiesReducer from "./redux/entities/reducers";
import articleReducers from "./pages/Feeds/reducers";

export default combineReducers({
  loadingBar: loadingBarReducer,
  ...entitiesReducer,
  ...articleReducers,
});
