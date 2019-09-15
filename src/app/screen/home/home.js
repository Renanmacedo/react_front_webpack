import React, {Component} from 'react';
import Content from '../../component/content/content';
import Card from '../../component/card/card';
import Toolbar from '../../component/toolbar/toolbar'
import Input from '../../component/input/inputs';
import Scroll from '../../component/scroll/scroll';
import images from '../../../assets/image/corrida.jpg';
import harves from '../../../assets/image/harvest.png';
import meat from '../../../assets/image/meat.png';
import pastas from '../../../assets/image/pasta.png';
import wine from '../../../assets/image/wine.png';
import snowflake from '../../../assets/image/snowflake.png'
export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            cards: [
                {title: 'Header', image: images, description: 'Card implematatio'}
                ,{title: 'Header', image: images, description: 'Card implematatio'}
                ,{title: 'Header', image: images, description: 'Card implematatio'}
            ],
            categories: [
                {title: 'Frios', img: snowflake }
                ,{title: 'Massas', img: pastas }
                ,{title: 'Adega', img: wine }
                ,{title: 'Carnes', img: meat }
                ,{title: 'Hortifrute', img: harves }
            ]
        }
    }

    render() {
        return (
            <Content>
                <Toolbar>
                    <h3 className="rn-toolbar-title">Search the Product</h3>
                    <Input className="rn-shadow"/>
                </Toolbar>
                <Scroll scrollStyle={{height: '130px', margin: '10px', justifyContent: "center"}} scrollPosition="horizontal">
                    {
                        this.state.categories.map(categoria => (
                            <div className="nr-card-rouded">
                                <img src={categoria.img}/>
                                <span>{categoria.title}</span>
                            </div>
                        ))
                    }
                </Scroll>
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