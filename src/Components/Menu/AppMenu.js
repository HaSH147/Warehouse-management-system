import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import IconAccueil from '@material-ui/icons/Dashboard';
import IconCommandes from '@material-ui/icons/ShoppingCart';
import IconClients from '@material-ui/icons/People';
import IconStock from '@material-ui/icons/BarChart';
import IconFournisseurs from '@material-ui/icons/AssignmentInd';
import IconArticles from '@material-ui/icons/AllInbox';
import IconValorisation from '@material-ui/icons/LibraryBooks';
import IconInventaires from '@material-ui/icons/AllInclusive';
import AppMenuItem from './AppMenuItem';
const appMenuItems = [
    {
        name: 'Accueil',
        link: '/accueil',
        Icon: IconAccueil,
    },
    {
        name: 'Clients',
        link: '/clients',
        Icon: IconClients,
    },
    {
        name: 'Fournisseurs',
        link: '/fournisseurs',
        Icon: IconFournisseurs,
    },
    {
        name: 'Articles',
        link: '/articles',
        Icon: IconArticles,
    },
    {
        name: 'Stock',
        Icon: IconStock,
        link: '/stock'
    },
     {
        name: 'Inventaires',
        link: '/inventaires',
        Icon: IconInventaires,
    },
    {
        name: 'Commandes',
        link: '/commandes',
        Icon: IconCommandes,
    },
];

const AppMenu = () => {
    const classes = useStyles();
    return (React.createElement(List, { component: "nav", className: classes.appMenu, disablePadding: true }, appMenuItems.map((item, index) => (React.createElement(AppMenuItem, Object.assign({}, item, { key: index }))))));
};
const drawerWidth = 240;
const useStyles = makeStyles(theme => createStyles({
    appMenu: {
        width: '100%',
    },
    navList: {
        width: drawerWidth,
    },
    menuItem: {
        width: drawerWidth,
    },
    menuItemIcon: {
        color: '#97c05c',
    },
}));
export default AppMenu;
