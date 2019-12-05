import Home from "../app/screen/home/home";
import QuemSomos  from '../app/screen/about/quemsomos';
export const routes = [
    {
        path: "/",
        exac: true,
        component: Home
    },
    {
        path: "/quemsomos"
        ,exac: false
        ,component: QuemSomos
    }
]
export const link = [
    {
        to: '/'
        ,title: 'Home'
        ,icon: 'home'
    },
    {
        to: '/quemsomos'
        ,title: 'Quem Somos'
    },
]