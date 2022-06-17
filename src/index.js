import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import "./css/all.min.css";
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);