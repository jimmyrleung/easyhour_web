import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { CompanyPage } from '../company';

import {
    IconButton
    , ListItem
    , ListItemIcon
    , ListItemText
    , Drawer
    , CssBaseline
    , AppBar
    , Toolbar
    , List
    , Typography
    , Divider
} from '@material-ui/core';

import {
    Menu as MenuIcon
    , ChevronLeft as ChevronLeftIcon
    , ChevronRight as ChevronRightIcon
} from '@material-ui/icons';

import { Theme } from '@material-ui/core/styles/createMuiTheme';
import MenuItems from './MenuItems';

const drawerWidth = 240;

interface IDrawerComponent {
    children?: ReactNode;
    theme: Theme;
    classes: any;
    title: string;
};

const styles = (theme: Theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }
});

class PersistentDrawerLeft extends React.Component<IDrawerComponent> {
    state = {
        open: false,
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes, theme, title } = this.props;
        const { open } = this.state;

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar disableGutters={!open}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}
                            className={classNames(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                            {title}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        {MenuItems.before.map(mi => (
                            <ListItem button key={mi.key} onClick={this.handleDrawerClose}>
                                <ListItemIcon>{<mi.icon />}</ListItemIcon>
                                <ListItemText primary={mi.name} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {MenuItems.after.map(mi => (
                            <ListItem button key={mi.key} onClick={this.handleDrawerClose}>
                                <ListItemIcon>{<mi.icon />}</ListItemIcon>
                                <ListItemText primary={mi.name} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
                <main
                    className={classNames(classes.content, {
                        [classes.contentShift]: open,
                    })}
                >
                    <div className={classes.drawerHeader} />
                    <CompanyPage />
                </main>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft);