
import React from 'react';
import { Link } from 'react-router-dom'
export default  class Header extends  React.Component {
    
    constructor(props) {
        super(props);
    }

    handleEvent(event) {
        
        if(this.checkIsSeleced(event.target.classList)) return;

        let nodeNav = event.target.parentNode;
        for(let i = 0; i < nodeNav.childNodes.length; i++) {
            if( this.checkIsSeleced(nodeNav.childNodes[i].classList) )
                nodeNav.childNodes[i].classList.remove('rn-navigation-item-selected');
        }
        event.target.classList.add('rn-navigation-item-selected');
        
    }
    checkIsSeleced(classList) {
        let count  = 0;
        while(classList.length > count) {
            if(classList[count] === 'rn-navigation-item-selected') return true;
            count++;
        }
    }
    render(){
        return (
            <header className="header-wrapper">
                    <nav className="rn-navigation">
                        <a className={"rn-navigation-item"} href="#home" onClick={event => this.handleEvent(event)}>
                            Home
                        </a>
                        <a className={"rn-navigation-item"} href="#quemsomos" onClick={event => this.handleEvent(event)}>
                            Quem Somos
                        </a>
                        <a className={"rn-navigation-item"} href="#quemsomos" onClick={event => this.handleEvent(event)}>
                        Contato
                    </a>
                {/* {
                    props.items.map((item, i) => (
                        <Link 
                            className={"rn-navigation-item"} 
                            key={i.toString()} 
                            to={item.to}>{item.title}</Link>   
                    ))sele
                } */}
                    </nav>
            </header>
        )
    }
};