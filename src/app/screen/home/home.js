import React, {Component} from 'react';
import Content from '../../component/content/content';
import Card from '../../component/card/card';
import Toolbar from '../../component/toolbar/toolbar'
import images from '../../../assets/image';
import FlexLayout from '../../component/flex/flex-layout';
import { createGesture } from '../../utils/gesture';
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
    UNSAFE_componentWillMount() {}
    renderItems() {
        let items = Array.from([10, 4,8, 9, 22, 64]);
        return items.map((element, index )=> (
            
                <Card key={element.toString()} 
                    styleWrapper={ index % 3 !== 0 ?  { width: '32%', margin: '3px'} : index  % 3 === 0 ? {width: '32%', margin: '3px'} : {margin: '3px'} }
                    source={"https://via.placeholder.com/320x180.png"}>
                </Card>
        ))
    }
    render() {
        return (
            <Content>
                <Toolbar style={{textAlign:  "center"}}>
                    <h3 className="rn-toolbar-title">Landing Page</h3>
                </Toolbar>
                <div style={{margin: "0px 10px"}}></div>
                <section id="home" style={{ marginLeft: '15px'}}>
                    <FlexLayout flexLayout={"row wrap"}>
                        { this.renderItems() }
                    </FlexLayout>
                </section>
                <section id="quemsomos">
                    <div style={{textAlign: 'center'}}>
                        <h2 style={{fontSize: '1.2em', color: '#868686'}}>Quem Somos</h2>
                    </div>

                    <div className="text-left"></div>
                </section>
            </Content>
        )
    }
}