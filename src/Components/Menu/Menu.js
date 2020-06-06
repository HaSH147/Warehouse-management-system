import React from 'react';
import clsx from 'clsx';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import PageClientsComponent from './PageClients';
import AppMenu from './AppMenu';
import Menucss from './Menu.css';
import PageFrssComponent from './PageFournisseurs'
import PageArticlesComponent from './PagesArticles';
import PageStockComponent from './StockChart/StockChart';
import PageInventairesComponent from'./PageInventaires';
import PageCommandesComponent from './PageCommandes';
import imgaccueil from './transparentimage3.png';
//<>

const PageAccueil = () => {
         return(
             <Typography>
             <img className= "  h-850 w-950 w-500-s w-1000-l mw30 absolute--fill-m fix  " src={imgaccueil} width="700" height="500" top="0" alt="Accueil" />
             </Typography>
         );
};
 
// const PageAccueil = () => React.createElement(Typography, { variant: "h3", component: "h1" }, "Page d'Accueil");
const PageClients = () => { return( <PageClientsComponent/>); };
const PageFournisseurs = () => { return( <PageFrssComponent/>); };
const PageArticles = () => { return( <PageArticlesComponent/>); };
const PageStock = () => { return( <PageStockComponent/>); };
const PageInventaires = () => { return( <PageInventairesComponent/>); };
const PageCommandes = () => { return( <PageCommandesComponent/>); };
const Menu = () => {
    const classes = useStyles();
    return (React.createElement(BrowserRouter, null,
        React.createElement("div", { className: clsx('App', classes.root) },
            React.createElement(CssBaseline, null),
            React.createElement(Drawer, { variant: "permanent", classes: {
                    paper: classes.drawerPaper,
                } },
                React.createElement(AppMenu, null)),
            React.createElement("main", { className: classes.content },
                React.createElement(Container, { maxWidth: "lg", className: classes.container },
                    React.createElement(Switch, null,
                        React.createElement(Route, { path: "/accueil", component: PageAccueil }),
                        React.createElement(Route, { path: "/clients", component: PageClients }),
                        React.createElement(Route, { path: "/fournisseurs", component: PageFournisseurs }),
                        React.createElement(Route, { path: "/articles", component: PageArticles }),
                        React.createElement(Route, { path: "/stock", component: PageStock }),
                        // React.createElement(Route, { path: "/valorisation", component: PageValorisation }),
                        React.createElement(Route, { path: "/inventaires", component: PageInventaires }),
                        React.createElement(Route, { path: "/commandes", component: PageCommandesComponent })))))));
};
const drawerWidth = 210;
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawerPaper: {
        position: 'fixed',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        background: '#1e2c4e',
        color: '#fff',
        top:0,
    },
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}));

export default Menu;
 