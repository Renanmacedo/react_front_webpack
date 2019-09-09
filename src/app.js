import React from 'react';
import  * as ReactDOM from 'react-dom';
import Internal from './app/component/internal/internal';
const root = document.querySelector("#root");
ReactDOM.render(
    <Internal />
, root);

console.log(window.location.pathname);