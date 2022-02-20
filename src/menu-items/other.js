// assets
import { IconBrandChrome, IconHelp, IconArtboard } from '@tabler/icons';

// constant
const icons = { IconBrandChrome, IconHelp, IconArtboard };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
    id: 'sample-docs-roadmap',
    type: 'group',
    children: [
        {
            id: 'backgrounds',
            title: 'Backgrounds',
            type: 'item',
            url: '/backgrounds',
            icon: icons.IconArtboard,
            breadcrumbs: false
        },
        {
            id: 'documentation',
            title: 'Demonstration',
            type: 'item',
            url: '/how_to',
            icon: icons.IconHelp,
            breadcrumbs: false
        }
    ]
};

export default other;
