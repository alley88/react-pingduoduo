import {createStore,combineReducers,applyMiddleware} from "redux"
import home from "./reducers/home"
import category from "./reducers/category"
import reduxThunk from "redux-thunk"

const reducer = combineReducers({
    home,
    category
})
export default createStore(reducer,applyMiddleware(reduxThunk))

