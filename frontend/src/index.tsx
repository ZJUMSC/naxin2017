import * as ReactDOM from 'react-dom';
import * as React from 'react';
import * as App from './app';

const description: string = 'MSC@ZJU 2017 natsu naxin frontend SPA';

ReactDOM.render(React.createElement(<App />, null), document.getElementById('root'));

console.log(description);
