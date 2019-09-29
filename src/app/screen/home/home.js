import React, {Component} from 'react';
import Content from '../../component/content/content';
import Card from '../../component/card/card';
import Toolbar from '../../component/toolbar/toolbar'
import Input from '../../component/input/inputs';
import Scroll from '../../component/scroll/scroll';
import images from '../../../assets/image';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            cards: [
                {title: 'Peixe', image: images.apple, description: "Produto saudavel e ótima qualidade, disponível para compra, ajadadaddadadadasdadadasdasdasdasdasdasd"}
                ,{title: 'Carne', image: images.apple, description: 'Card implematatio'}
                ,{title: 'Bebidas', image: images.drinks, description: 'Card implematatio'}
                ,{title: 'Maça', image: images.apple, description: 'Card implematatio'}
                ,{title: 'Maça', image: images.apple, description: 'Card implematatio'}
            ],
            categories: [
                {title: 'Frios', img: images.salami }
                ,{title: 'Alimentos', img: images.foods }
                ,{title: '', img:images.meat }
                ,{title: 'Carnes', img:images.harvest }
                ,{title: 'Hortifrute', img: images.drinks }
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
                <div style={{margin: "0px 10px"}}></div>
                <Scroll scrollStyle={{height: '130px', margin: '10px', justifyContent: "center"}} scrollPosition="horizontal">
                    {
                        this.state.categories.map(categoria => (
                            <div className="nr-card-rouded">
                                <img src={categoria.img}/>
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