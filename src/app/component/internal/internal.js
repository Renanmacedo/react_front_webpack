
import React from 'react'
import Header from '../header/header';
import Footer from '../footer/footer';
import Sidemenu from '../sidemenu/sidemenu';
import * as Routes from '../../../config/routes';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default (props) => (
    <>
        {/*<Sidemenu /> */}
        <Router>
            <Header items={Routes.link} />
            {
                Routes.routes.map((route, i) => (
                    <Route key={i.toString()} path={route.path} component={route.component} exact={route.exac} />
                ))
            }
        </Router>
        {/* <Footer /> */}
    </>
)