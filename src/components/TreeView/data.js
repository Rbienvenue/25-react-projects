const { lazy } = require("react");

const menus = [
    {
        label: 'home',
        to : '/home'
    },
    {
        label : 'settings',
        to : '/settings',
        children : [
            {
                label : 'account',
                to : '/account',
                children : [
                    {
                        label: 'user information',
                        to : '/u-information'
                    },
                    {
                        label: 'delete account',
                        to : '/delete-account'
                    }
                ]
            },
            {
                label : 'theme',
                to : '/theme',
                children : [
                    {
                        label : 'dark',
                        to : '/dark'
                    },
                    {
                        label : 'light',
                        to : '/light'
                    }
                ]
            }
        ]
    },
    {
        label: 'pages',
        to : '/pages',
        children : [
            {
                label: 'auth',
                to: '/auth',
                children: [
                    {
                        label: 'login',
                        to : '/login',
                    },
                    {
                        label : 'register',
                        to : '/register'
                    }
                ]
            },
            {
                label: 'random data',
                to: '/random'
            }
        ]
    }
]

export default menus;