import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import balanceReducer from './reducers/balanceReducer';
import App from './components/app';

const store = createStore(balanceReducer);

render(
    <Provider store={store} >
        <App />
    </Provider>
    , document.getElementById('root'));