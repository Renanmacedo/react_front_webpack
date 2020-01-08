import React, {Component} from 'react';
import Content from '../../component/content/content';
import Card from '../../component/card/card';
import Toolbar from '../../component/toolbar/toolbar'
import images from '../../../assets/image';
import FlexLayout from '../../component/flex/flex-layout';
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
        let items = Array.from([10, 4,8, 9, 22, 64, 89, 67, 90, 764, 653, 1094,574]);
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
                <div className="content-items">
                    <FlexLayout flexLayout={"row wrap"}>
                    </FlexLayout>
                </div>
            </Content>
        )
    }
}