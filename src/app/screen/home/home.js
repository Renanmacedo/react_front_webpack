import React, {Component} from 'react';
import Content from '../../component/content/content';
import Card from '../../component/card/card';
export default class Home extends Component {

    constructor(props){
        super(props);
    }
    render() {
        return (
            <Content contentClass="">
                <div className="toolbar">
                    <h2>React App</h2> 
                </div>
                <div style={{display: 'flex', flex: 1, flexWrap: 'wrap' }}>
                <Card style={{margin: '2px'}}>
                    <div>
                        <p>Card rended</p>
                    </div>
                </Card>
                <Card style={{margin: '2px'}}>
                    <div>
                        <p>Card rended</p>
                    </div>
                </Card>
                <Card style={{margin: '2px'}}>
                    <div>
                        <p>Card rended</p>
                    </div>
                </Card>
                <Card style={{margin: '2px'}}>
                    <div>
                        <p>Card rended</p>
                    </div>
                </Card>
                <Card style={{margin: '2px'}}>
                    <div>
                        <p>Card rended</p>
                    </div>
                </Card>
                
                </div>
            </Content>
        )
    }
}