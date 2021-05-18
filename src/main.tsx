import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

const development = process.env.NODE_ENV === 'development';

const App = () => <div className="bg-primary500 w-full h-full">calaboca cacete</div>;

ReactDOM.render(App(), document.getElementById('root'));
