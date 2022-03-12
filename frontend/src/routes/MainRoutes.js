import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import { decomposeColor } from '@mui/system';
import backgrounds from 'views/plans';
import AdminPage from 'views/adminpage';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsUpload = Loadable(lazy(() => import('views/utilities/Upload')));
const UtilsImage = Loadable(lazy(() => import('views/utilities/Image')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));
const Admin = Loadable(lazy(() => import('views/adminpage/index')));
const UserVideos = Loadable(lazy(() => import('views/user_profile/index')));

// sample page routing
const Demonstrate = Loadable(lazy(() => import('views/how_to')));
const Plans = Loadable(lazy(() => import('views/plans')));
const Profile = Loadable(lazy(() => import('views/profile')));
const UploadImage = Loadable(lazy(() => import('views/upload/imageupload')));
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: '/dashboard/default',
            element: <DashboardDefault />
        },
        {
            path: '/utils/util-typography',
            element: <UtilsTypography />
        },
        {
            path: '/utils/upload-image',
            element: <UploadImage />
        },
        {
            path: '/utils/util-image',
            element: <UtilsImage />
        },
        {
            path: '/utils/util-color',
            element: <UtilsColor />
        },
        {
            path: '/utils/util-upload',
            element: <UtilsUpload />
        },
        {
            path: '/utils/util-shadow',
            element: <UtilsShadow />
        },
        {
            path: '/icons/tabler-icons',
            element: <UtilsTablerIcons />
        },
        {
            path: '/icons/material-icons',
            element: <UtilsMaterialIcons />
        },
        {
            path: '/how_to',
            element: <Demonstrate />
        },
        {
            path: '/plans',
            element: <Plans />
        },
        {
            path: '/user/social-profile',
            element: <Profile />
        },
        {
            path: '/user/admin-page',
            element: <Admin />
        },
        {
            path: '/user/user-videos',
            element: <UserVideos />
        }
    ]
};

export default MainRoutes;
