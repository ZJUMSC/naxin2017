import * as ReactDOM from 'react-dom';
import * as React from 'react';
import App from './app';
import * as config from './config';

import './index.css';

const description: string = 'MSC@ZJU 2017 natsu naxin frontend SPA';

const ad = `
若你在控制台输出中看到这句话，请在自我介绍当中高声喊出 El Psy Congroo!
说出这句暗号，我们就能得知，你就是我们要找的人ヽ(*ﾟдﾟ)ノｶｲﾊﾞｰ
一切都是命运石之门的选择！
`;

const ascii = String.raw`

      ___           ___           ___           ___                      ___     
     /\  \         /\__\         /\__\         /\__\        ___         /\  \    
    |::\  \       /:/ _/_       /:/  /        /::|  |      /\__\        \:\  \   
    |:|:\  \     /:/ /\  \     /:/  /        /:/:|  |     /:/__/         \:\  \  
  __|:|\:\  \   /:/ /::\  \   /:/  /  ___   /:/|:|  |__  /::\  \     ___  \:\  \ 
 /::::|_\:\__\ /:/_/:/\:\__\ /:/__/  /\__\ /:/ |:| /\__\ \/\:\  \   /\  \  \:\__\
 \:\~~\  \/__/ \:\/:/ /:/  / \:\  \ /:/  / \/__|:|/:/  /  ~~\:\  \  \:\  \ /:/  /
  \:\  \        \::/ /:/  /   \:\  /:/  /      |:/:/  /      \:\__\  \:\  /:/  / 
   \:\  \        \/_/:/  /     \:\/:/  /       |::/  /       /:/  /   \:\/:/  /  
    \:\__\         /:/  /       \::/  /        |:/  /       /:/  /     \::/  /   
     \/__/         \/__/         \/__/         |/__/        \/__/       \/__/    

`;

const ping = () => fetch(config.apiBaseUrl + 'hello', {
    method: 'GET'
}).then(res => console.log(res)).catch(err => console.log(err));

ReactDOM.render(<App />, document.getElementById('root'));

console.log(description);
console.log(ascii);
console.log(ad);
