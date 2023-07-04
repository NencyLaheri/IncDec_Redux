import {  createStore } from "redux";
// import { configureStore  } from "@reduxjs/toolkit";
import rootReducer from "./reducer/index";

// const createstore=createStore()

// const store=createStore({reducer: rootReducer,},  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store=createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store        