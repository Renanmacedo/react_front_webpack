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
                <div style={{flex: 1, display: "flex", overflowX: 'auto'}}>
                    <p>Item</p>
                    <p>Item</p>
                    <p>Item</p>
                </div>
                <div style={{display: 'flex', flex: 1, flexWrap: 'wrap',justifyContent: 'space-evenly' }}>
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