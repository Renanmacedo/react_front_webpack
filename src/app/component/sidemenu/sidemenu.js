
import React,{ Component } from 'react';

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
                    
                    </div>
                </div>
            }
            </>
        )
    }
}