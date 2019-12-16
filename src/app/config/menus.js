export const link = [
    {
        to: '/'
        ,title: 'Home'
        ,icon: 'home'
    },
    {
        to: '/cadastro'
        ,title: 'Cadastro'
        ,icon: 'person_add'
    },
    {
        to: '/solicitacoes'
        ,title: 'Solicitações'
        ,icon: 'store'
        ,child: [
            {
                to: '/produtos/liquidacao'
                ,title: 'Liquidação'
                ,icon: 'whatshot'

            }
        ]
    }
]