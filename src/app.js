import React from 'react';
import  * as ReactDOM from 'react-dom';
import Internal from './app/component/internal/internal';
import Home from './app/screen/home';
const root = document.querySelector("#root");
ReactDOM.render(
<Internal>
    <Home />
</Internal>
, root);

console.log(window.location.pathname);