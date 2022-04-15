// assets
import { IconDashboard, IconHelp } from '@tabler/icons';

// constant
const icons = { IconDashboard, IconHelp };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'help',
            title: 'Help',
            type: 'item',
            url: '/dashboard/help',
            icon: icons.IconHelp,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
