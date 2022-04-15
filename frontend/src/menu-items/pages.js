// assets
import { IconKey, IconUser } from '@tabler/icons';

// constant
const icons = {
    IconKey,
    IconUser
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'pages',
    title: 'Pages',
    // caption: 'Pages Caption',
    type: 'group',
    children: [
        {
            id: 'user-admin-page',
            title: 'Admin Page',
            type: 'item',
            url: '/user/admin-page',
            icon: icons.IconUser,
            breadcrumbs: false
        },
        {
            id: 'user-results-page',
            title: 'Results Page',
            type: 'item',
            url: '/user/results-page',
            icon: icons.IconUser,
            breadcrumbs: false
        },
        {
            id: 'authentication',
            title: 'Authentication',
            type: 'collapse',
            icon: icons.IconKey,

            children: [
                {
                    id: 'login3',
                    title: 'Login',
                    type: 'item',
                    url: '/pages/login/login3',
                    target: true
                },
                {
                    id: 'register3',
                    title: 'Register',
                    type: 'item',
                    url: '/pages/register/register3',
                    target: true
                },
                {
                    id: 'startpage',
                    title: 'Start Page',
                    type: 'item',
                    url: '/pages/startpage',
                    target: true
                }
            ]
        }
    ]
};

export default pages;
