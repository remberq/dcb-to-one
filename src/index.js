import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MainPage } from './components/MainPage';
import {store} from "./store/state";
import {Provider} from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <Provider store={store}>
            <MainPage />
        </Provider>
);

