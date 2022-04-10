import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import {store} from './app/store';
import {Provider} from 'react-redux';
import "./index.css";

const rootContainer = document.getElementById("root");
const root = createRoot(rootContainer);
root.render(<Provider store={store}><App/></Provider>)
