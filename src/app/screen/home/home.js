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
        generateAllPosibilits();
        getMilharesToday();
        let segunda = milharesToday.slice(0,25);
        let terca = milharesToday.slice(25,50);
        let quarta = milharesToday.slice(50,75);
        let quinta = milharesToday.slice(75,100);
        let sexta = milharesToday.slice(100,125);
        let sabado = milharesToday.slice(125,150);
        let segundaOnzeHoras = segunda.slice(0,5);
        let segundaDuasHoras  = segunda.slice(5,10);
        let segundaQuartorzeHoras = segunda.slice(10,15);
        let segundaDezeseisHora = segunda.slice(15,20);
        let segundaVinteHoras = segunda.slice(20,25);

        console.log("SEGUNDA 11 H ", segundaOnzeHoras);
        console.log("SEGUNDA 14 H ", segundaDuasHoras);
        console.log("SEGUNDA 16 H ", segundaQuartorzeHoras);
        console.log("SEGUNDA 18 H ", segundaDezeseisHora);
        console.log("SEGUNDA 21 H ", segundaVinteHoras);
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

// posibilidades 4 * 100 * 25, onde 4 são a quantida de que
//cada grupo possui, 100 é o total de numeros nos grupos e
// 25 são todos os grupos
const dias = ['segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado'];
const quantidadeByGruop = 4;
const allNumbers = 100; // 100 = 00
const quantidadeGruop = 25;
const quantidade = ( (Math.pow(5, 2) ) * 6);

const q = quantidadeByGruop * quantidadeGruop * 100;
const milharesSorteadasPrimeiro = []; // 1 semana 
const milharesSorteadasSecToFive = ['0594','0328','4225','5905','6778','2463','8227','2953','5702','9785','6857','8066','2849','7343','1663','2487','6559','2863','4242','1083','3321','6508','7542','4190','6801','8626','4551','0841','5819','3832','7131','4126','5591','5844','3029','0035','4955','2683','2289','7666','6879','5568','4984','1625','5137','7340','9433','0867','5886','6468','3791','4593','4983','0872','9890','1237','6044','0809','7446','8741','4619','5037','3821','8218','6416','2388','4615','6038','6665','5513','7212','6233','5035','2339','4512','3350','5303','8537','2846','2248','6145','4884','3213','9529','4472','7429','7174','3329','8830','8336'];
let arr = [];
let milharesToday = [];
const generateAllPosibilits = () => {
    let count = 0;
    while(count <  q){
        let n = generate();
        let index = checkIndex(n);
        if(index !== -1)
            continue;
        
        arr.push(n);  
        count++;
    }
}
const generate = ()  =>{
    return (Math.floor(Math.random() * 10).toString()) 
    + (Math.floor(Math.random() * 10).toString()) 
    + (Math.floor(Math.random() * 10).toString()) 
    + (Math.floor(Math.random() * 10).toString());
}

const checkIndex = n => arr.findIndex(numb => numb == n);
const getMilharesToday = () => {
    let count = 0;
    while(count < quantidade) {
        let indexMilhar = Math.floor(Math.random() * 10000);
        let milhar = arr[indexMilhar];
        let index = milharesSorteadasSecToFive.findIndex(numb => numb == milhar);
        if(index !== -1)
            continue;
        let millharToday = milharesToday.findIndex(n => n == milhar);
        if(millharToday !== -1)
            continue;
        milharesToday.push(milhar);
        count++;
    }
}

const combineArray = () => {


}