
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
            ,effectTransition: false
        }
    }
    componentDidMount() {}

    arrowClick(e) {
        let sideContainer = document.getElementById("banner");
        if(!this.state.effectTransition){
            sideContainer.style.transform = `translateX(-174px)`;
            this.setState({ effectTransition : true }, () => this.props.onToggle(this.state.effectTransition));
        }else{
            sideContainer.style.transform = `translateX(0)`;
            this.setState({ effectTransition : false }, () => this.props.onToggle(this.state.effectTransition)); 
        }
    }
    render() {
        return (
            <>
                {this.state.visible &&
                    <aside className="sidemenu" >
                        <aside className={`sidemenu--container`} id="banner">
                            <div className="sidemenu--logo">
                                <img src={images.logo} alt="image" />
                            </div>
                            <div className="sidemenu--inner">
                                <nav className="sidemenu-inner-items">
                                    <div className="sidemenu-list-items">
                                        {
                                            this.props.items.map((item, i) => ( 
                                                <div key={i.toString()} 
                                                    className={`sidemenu--item`} >
                                                    <Icon style={ this.state.effectTransition ? { transform: `translateX(170px)`, animation: 'transform .5s'} : {transform: `translate(0px)`, animation: 'transform .3s'}}>{item.icon}</Icon>
                                                    <Link
                                                        key={i.toString()}
                                                        to={item.to}>
                                                        {item.title}
                                                    </Link>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </nav>
                            </div>
                            <div className="footer-toggle">
                                <button onClick={e => this.arrowClick(e)}>
                                    {!this.state.effectTransition && <Icon style={{color: "#fff"}}>keyboard_arrow_left</Icon> }
                                    {this.state.effectTransition && <Icon style={{color: "#fff"}}>keyboard_arrow_right</Icon> }
                                </button>
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
    ,onToggle: PropsType.func
}