import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import UserSlice from "./Redux/UserReducer"
import StorySlice from "./Redux/StoryReducer"
import { CookiesProvider } from 'react-cookie';
const root = ReactDOM.createRoot(document.getElementById('root'));
const MyStore = configureStore({
  reducer: {
   UserSlice,
   StorySlice,
},
})

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={MyStore}>
        <CookiesProvider defaultSetOptions={{path:"/"}}>
        <App />
        </CookiesProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
