import React, {Component} from 'react';
import Content from '../../component/content/content';
import Card from '../../component/card/card';
import Toolbar from '../../component/toolbar/toolbar'
import Input from '../../component/input/inputs'
export default class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            cards: [{title: 'Header', image: './corrida.jpg', description: 'Card implematatio'}]
        }
    }

    render() {
        return (
            <Content>
                <Toolbar>
                    <h3 className="rn-toolbar-title">Search the Product</h3>
                    <Input className="rn-shadow"/>
                </Toolbar>
                <div style={{display: 'flex', flex: 1, flexWrap: 'wrap',margin: '10px'}}>
                {
                    this.state.cards.map((cards, index )=> (
                        <Card 
                            style={{margin: '2px'}} key={index.toString()}
                            source={cards.image}
                            >
                            <div>
                                <p>{cards.description}</p>
                            </div>
                        </Card>       
                    ))
                }                        
                </div>
            </Content>
        )
    }
}