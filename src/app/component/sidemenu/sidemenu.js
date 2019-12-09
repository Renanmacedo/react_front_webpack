
import React,{ Component } from 'react';
import PropsType from 'prop-types';
export default class Sidemenu extends Component {
    constructor(props) {

        super(props);
        this.state = {
            visible: true
        }
    }
    render(){
        return(
            <>
            { this.state.visible && 
                <div className="sidemenu--container" >
                    <div className="sidemenu--inner">
                        <div className="sidemenu--item">
                            <a>Home</a>
                        </div>
                        <div className="sidemenu--item">
                            <a>Home</a>
                        </div>
                        <div className="sidemenu--item">
                            <a>Home</a>
                        </div>
                        { this.props.children }
                    </div>
                </div>
            }
            </>
        )
    }
}
Sidemenu.propsType = {
    items: PropsType.array
}