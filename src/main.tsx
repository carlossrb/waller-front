import ReactDOM from 'react-dom';
import Transactions from './modules/transactions';

import './styles.css';

const development = process.env.NODE_ENV === 'development';

ReactDOM.render(Transactions(), document.getElementById('root'));
