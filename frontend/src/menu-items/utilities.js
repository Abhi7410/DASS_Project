// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill, IconArrowBarToUp } from '@tabler/icons';

// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill,
    IconArrowBarToUp
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
    id: 'utilities',
    title: 'Media and Models',
    type: 'group',
    children: [
        // {
        //     id: 'util-typography',
        //     title: 'Text',
        //     type: 'item',
        //     url: '/utils/util-typography',
        //     icon: icons.IconTypography,
        //     breadcrumbs: false
        // },
        // {
        //     id: 'util-color',
        //     title: 'Image and Video',
        //     type: 'item',
        //     url: '/utils/util-color',
        //     icon: icons.IconPalette,
        //     breadcrumbs: false
        // },
        {
            id: 'util-upload',
            title: 'Upload Media',
            type: 'item',
            url: '/utils/util-upload',
            icon: icons.IconArrowBarToUp,
            breadcrumbs: false
        }
        // {
        //     id: 'util-shadow',
        //     title: 'Backgrounds',
        //     type: 'item',
        //     url: '/utils/util-shadow',
        //     icon: icons.IconShadow,
        //     breadcrumbs: false
        // },
        // {
        //     id: 'icons',
        //     title: '3D Avatar',
        //     type: 'collapse',
        //     icon: icons.IconWindmill,
        //     children: [
        //         {
        //             id: 'tabler-icons',
        //             title: 'Front Profile',
        //             type: 'item',
        //             url: '/icons/tabler-icons',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'material-icons',
        //             title: 'Right Profile',
        //             type: 'item',
        //             url: '/icons/material-icons',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'material-icons',
        //             title: 'Left Profile',
        //             type: 'item',
        //             url: '/icons/material-icons',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'material-icons',
        //             title: 'Back Profile',
        //             type: 'item',
        //             url: '/icons/material-icons',
        //             breadcrumbs: false
        //         }
        //     ]
        // }
    ]
};

export default utilities;
