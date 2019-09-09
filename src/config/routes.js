import Home from "../app/screen/home/home";
import Cadastro  from '../app/screen/cadastrar';
export const routes = [
    {
        path: "/",
        exac: true,
        component: Home
    },
    {
        path: "/cadastro"
        ,exac: false
        ,component: Cadastro
    }
]
export const link = [ 
    {
        to: '/'
        ,title: 'Home'
    },
    {
        to: '/cadastro'
        ,title: 'Cadastro'
    }
]