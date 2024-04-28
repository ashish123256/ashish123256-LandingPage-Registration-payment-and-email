import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store, persistor } from './redux/store.js'
import { PersistGate } from 'redux-persist/integration/react';
import {Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>

    <App /> 
     <ToastContainer 
     position="top-center"
     autoClose={4000}
         />

     </PersistGate>
    </Provider>
  </React.StrictMode>,
)
