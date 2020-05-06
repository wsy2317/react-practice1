import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// IE 11 support
import 'core-js/modules/es.array.includes';
import 'core-js/modules/es.array.fill';
import 'core-js/modules/es.string.includes';
import 'core-js/modules/es.string.trim';
import 'core-js/modules/es.object.values';

const appName = "athena-demo";
ReactDOM.render(<App/>, document.body);