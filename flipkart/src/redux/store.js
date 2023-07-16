import {createStore, combineReducers, applyMiddleware} from 'redux';
//this cross line to word means saying, use reduxtoolkit insted of redux
import {
  getProductsReducer,
  getProductDetailsReducer
} from "./reducers/productReducer";
import {cartReducer} from "./reducers/cartReducer";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';


const reducer = combineReducers({
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
    cart: cartReducer,
});

const middleware = [thunk];

const store = createStore(
     reducer,
composeWithDevTools(applyMiddleware(...middleware))
)

export default store;