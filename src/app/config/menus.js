export const link = [
    {
        to: '/'
        ,title: 'Home'
        ,icon: 'home'
    },
    {
        to: '/extrato'
        ,title: 'Extrato'
        ,icon: 'attach_money'
    },
    {
        to: '/produtos'
        ,title: 'produtos'
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