import React from 'react';

import Home from "../screen/home/home";
import QuemSomos  from '../screen/about/quemsomos';
import Header from '../component/header/header';
import Sidemenu from '../component/sidemenu/sidemenu';
import Notfound from '../screen/notfound/notfound';
import Footer from '../component/footer/footer'
import { link } from '../config/menus';


import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';


const Routes = () => (

    <BrowserRouter>
        <Header />
        <Sidemenu items={ link }/>
        <Switch>
            <Route  exact path="/" component={ Home }/>
            <Route path="/atendimento" component={QuemSomos} />
            <Route path="*" component={Notfound} />
        </Switch>
        <Footer />
    </BrowserRouter>
);

export default Routes;
