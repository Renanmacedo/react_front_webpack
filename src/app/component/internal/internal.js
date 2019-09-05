
import React  from 'react'
import Header from '../header/header';
import Footer from '../footer/footer'
const items = [{title: 'Home'}, {title: 'Contatos'}]

export default (props) => (
    <>
        <Header items={items}/>
        {props.children}
        <Footer />
    </>
)