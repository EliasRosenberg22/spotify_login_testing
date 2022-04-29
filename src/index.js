/* eslint-disable no-unused-vars */
/* eslint-disable react/function-component-definition */
/* eslint-disable linebreak-style */
// import $ from 'jquery';
import './style.scss';
import {
  BrowserRouter, Routes, Route, NavLink, useParams,
} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './reducers';

import App from './components/app';

// this creates the store with the reducers
const store = configureStore({
  reducer: rootReducer,
});

const root = createRoot(document.getElementById('main'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
