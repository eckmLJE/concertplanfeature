import { combineReducers } from "redux";

import userReducer from "./userReducer";
import navReducer from "./navReducer";
import plansReducer from "./plansReducer";
import concertsReducer from "./concertsReducer";
import herokuReducer from "./herokuReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  navs: navReducer,
  plans: plansReducer,
  concerts: concertsReducer,
  heroku: herokuReducer
});
