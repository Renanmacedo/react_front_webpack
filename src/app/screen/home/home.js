import React, {Component} from 'react';
import Content from '../../component/content/content';
import Card from '../../component/card/card';
import Toolbar from '../../component/toolbar/toolbar'
import Input from '../../component/input/inputs';
import Scroll from '../../component/scroll/scroll';
import images from '../../../assets/image';
import harves from '../../../assets/image/harvest.png';
import meat from '../../../assets/image/meat.png';
import pastas from '../../../assets/image/pasta.png';
import wine from '../../../assets/image/wine.png';
import snowflake from '../../../assets/image/snowflake.png';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            cards: [
                {title: 'Peixe', image: images.fish, description: "Produto saudavel e ótima qualidade, disponível para compra, ajadadaddadadadasdadadasdasdasdasdasdasd"}
                ,{title: 'Carne', image: images.meat, description: 'Card implematatio'}
                ,{title: 'Melancia', image: images.watermelon, description: 'Card implematatio'}
                ,{title: 'Banana', image: images.banana, description: 'Card implematatio'}
                ,{title: 'Maça', image: images.apple, description: 'Card implematatio'}
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
                <Toolbar style={{textAlign:  "center"}}>
                    <h3 className="rn-toolbar-title"></h3>
                    <Input className="rn-shadow" placeholder="Pesquise por nome, categoria ou descrição"/>
                </Toolbar>
                <div style={{margin: "0px 10px"}}>
                    <h1 style={{fontSize: "1.2em", color: "#4e4e4e"}}>Categorias</h1>
                </div>
                <Scroll scrollStyle={{height: '130px', margin: '10px', justifyContent: "center"}} scrollPosition="horizontal">
                    {
                        this.state.categories.map(categoria => (
                            <div className="nr-card-rouded">
                                <img src={categoria.img}/>
                                <span style={{fontSize:"1rem",color: "#4e4e4e"}}>{categoria.title}</span>
                            </div>
                        ))
                    }
                </Scroll>
                <div style={{margin: "0px 10px"}}>
                    <h1 style={{fontSize: "1.2em", color: "#4e4e4e"}}>Todos os Produtos</h1>
                </div>
                <div style={{display: 'flex', flex: 1, flexWrap: 'wrap',margin: '10px'}}>
                {
                    this.state.cards.map((cards, index )=> (
                        <Card 
                            style={{margin: '2px'}} key={index.toString()}
                            thumbnail={cards.image}>
                            <>
                                <p>{cards.description}</p>
                            </>
                        </Card>       
                    ))
                }                        
                </div>
            </Content>
        )
    }
}