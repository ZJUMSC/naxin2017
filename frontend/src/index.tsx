import * as ReactDOM from 'react-dom';
import * as React from 'react';
import App from './app';
import * as config from './config';

import './index.css';

const description: string = 'MSC@ZJU 2017 natsu naxin frontend SPA';

const ping = () => fetch(config.apiBaseUrl+'hello', {
        method: 'GET'
    }).then(res => console.log(res)).catch(err => console.log(err));


ReactDOM.render(<App />, document.getElementById('root'));

console.log(description);
ping();
