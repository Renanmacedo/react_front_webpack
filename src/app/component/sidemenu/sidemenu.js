
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
            ,hover: false
        }
    }
    componentDidMount() {
        let element = document.getElementById("banner");
        console.log(element)
        element.addEventListener( "mouseover", event => {
            this.setState( {hover: true } )
        })
        element.addEventListener("mouseleave", event => {
            this.setState( { hover: false })
        })
    }
    render() {
        return (
            <>
                {this.state.visible &&
                    <aside className="sidemenu" >
                        <aside className={`sidemenu--container ${this.state.hover ? 'sidemenu--container-effect' : '' }`} id="banner">
                            <div className="sidemenu--logo">
                                <img src={images.logo} alt="image" />
                            </div>
                            <div className="sidemenu--inner">
                                <nav className="sidemenu-inner-items">
                                    <div className="sidemenu-list-items">
                                        {
                                            this.props.items.map((item, i) => (
                                                <div key={i.toString()} className={`sidemenu--item ${this.state.hover ? 'sidemenu--item-effect' : ''}`} >
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