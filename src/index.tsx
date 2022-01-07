import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import './index.css';
import {Counter} from "./typescript/Contex";
import {Provider} from "react-redux";
// import {store} from "./state/index";
import { store } from './store/index';
// import {App} from "./App";
import {AppTwo} from "./AppTwo";



ReactDOM.render(
 <Provider store={store}>
  <AppTwo /> 
 </Provider>   
,
document.getElementById('root')
);