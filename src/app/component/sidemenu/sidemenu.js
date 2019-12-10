
import React, { Component } from 'react';
import PropsType from 'prop-types';
import images from '../../../assets/image/';
import { Link } from 'react-router-dom';
import { Icon } from '@material-ui/core'
export default class Sidemenu extends Component {
    constructor(props) {

        super(props);
        this.state = {
            visible: true
        }
    }
    render() {
        return (
            <>
                {this.state.visible &&
                    <aside className="sidemenu" >
                        <aside className="sidemenu--container">
                            <div className="sidemenu--logo">
                                <img src={images.logo} alt="image" />
                            </div>
                            <div className="sidemenu--inner">
                                <nav className="sidemenu-inner-items">
                                    <div className="sidemenu-list-items">
                                        {
                                            this.props.items.map((item, i) => (
                                                <div key={i.toString()} className="sidemenu--item">
                                                    <Link
                                                        key={i.toString()}
                                                        to={item.to}>
                                                        {item.title}
                                                    </Link>
                                                    <Icon >{item.icon}</Icon>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </nav>
                            </div>
                        </aside>
                    </aside>
                }
            </>
        )
    }
}
Sidemenu.propsType = {
    items: PropsType.array
}