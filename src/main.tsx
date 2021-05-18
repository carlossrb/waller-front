import ReactDOM from 'react-dom';
import Payments from './modules/payments';

import './styles.css';

const development = process.env.NODE_ENV === 'development';

ReactDOM.render(Payments(), document.getElementById('root'));
