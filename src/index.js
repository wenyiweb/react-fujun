import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
// Redux
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import reducers from './reducers'

import flexible from 'lib-flexible/flexible'

import './index.css';
import App from './containers/app';

const store = createStore(reducers,compose(
	applyMiddleware(),
	window.devToolsExtension ? window.devToolsExtension() : f => f
))
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));
registerServiceWorker();
