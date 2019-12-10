import React from 'react';

import Home from "../screen/home/home";
import QuemSomos  from '../screen/about/quemsomos';
import Header from '../component/header/header';
import Sidemenu from '../component/sidemenu/sidemenu';
import Notfound from '../screen/notfound/notfound'
import { link } from '../config/menus';


import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';


const Routes = () => (

    <BrowserRouter>
        <Header />
        <Sidemenu items={ link } />
        <Switch>
            <Route  exact path="/" component={ Home }/>
            <Route path="/extrato" component={QuemSomos} />
            <Route path="/perfil" component={() => <p>Perfil</p>} />
            <Route path="/transferir" component={() => <p>Transferir</p>} />
            <Route path="*" component={Notfound} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
