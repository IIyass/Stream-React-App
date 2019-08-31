import React from 'react';
import ReactDom from 'react-dom';
import App from './Component/App';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware, compose} from 'redux';
import Reducers from './Component/Reducers';
import reduxthunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(Reducers,composeEnhancers(applyMiddleware(reduxthunk)));
ReactDom.render(

<Provider  store={store}>
<App/>
</Provider>



,document.querySelector('#root'));

