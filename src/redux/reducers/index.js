import {ProductReducer} from "./product"
import {combineReducers} from "redux"

export const rootReducer = combineReducers({product :ProductReducer});
