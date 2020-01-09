
import React from 'react';
import { Icon } from '@material-ui/core';
import PropsType from 'prop-types';
export default  class Header extends  React.Component {
    
    constructor(props) {
        super(props);
        this.state =  {
            menuVisible: false
        }
    }
    showMenu(event) {
        let menu = document.getElementById("menu");
        menu.style.display = "block";
        this.setState( { menuVisible: true } )
    }
    closeMenu(event) {
        let menu = document.getElementById("menu");
        let visible = menu.getAttribute('menu-visible');
        if(visible)
            menu.style.display = "none";   
    }
    componentDidMount() {
        let element = document.querySelectorAll("span[role='menu']")[0];
        element.addEventListener('click', evt => setTimeout(() => this.showMenu(evt)))
        document.addEventListener('click', evt => this.closeMenu(evt))
    }
    render(){
        return (
            <header className="header-wrapper">
                    <nav className="rn-navigation" style={ this.props.navStyleWrapper ? {...this.props.navStyleWrapper} : null }>
                        <span className="menu-option" role="menu">
                            <Icon style={{color: "#fff"}}>person</Icon>
                        </span>
                        <div className="menu-items menu-items-content" id="menu" menu-visible={this.state.menuVisible.toString()}>
                            <div className="menu-item"><a href="#">Perfil</a></div>
                            <div className="menu-item"><a>Configurações</a></div>
                            <div className="menu-item"><a>Logout</a></div>
                        </div>
                    </nav>
            </header>
        )
    }
};
Header.propsType = {
    navStyleWrapper: PropsType.oneOfType([
        PropsType.string
        ,PropsType.object
        ,PropsType.bool
        ,PropsType.number
    ])
}