import React from 'react';

import Home from "../screen/home/home";
import QuemSomos  from '../screen/about/quemsomos';
import Header from '../component/header/header';
import Sidemenu from '../component/sidemenu/sidemenu';
import Notfound from '../screen/notfound/notfound';
import Footer from '../component/footer/footer'
import { link } from '../config/menus';


import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

export default class Routes extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            _sidemenuOpned:  false
        }
    }
    sideEffect(toggle) {
        this.setState( { _sidemenuOpned: toggle } )
    }
    render() {
        return(
            <BrowserRouter>
                <Header navStyleWrapper={ !this.state._sidemenuOpned ? { marginLeft: '230px', transition: 'margin-left 0.3s cubic-bezier(0.7, 0.05, 0.35, 0.03)'} : {marginLeft: '64px',transition: 'margin-left 0.323s cubic-bezier(0.7, 0.05, 0.35, 0.03)' }}/>
                <Sidemenu items={ link } onToggle={ toggle =>   this.sideEffect(toggle) }/>
                <Switch>
                    <Route  exact path="/" component={ Home }/>
                    <Route path="/atendimento" component={QuemSomos} />
                    <Route path="*" component={Notfound} />
                </Switch>
                <Footer />
            </BrowserRouter>
        )
    }

};
