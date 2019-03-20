import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/lab/Breadcrumbs';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

import {
    Paper
    , Typography
    , Link
} from '@material-ui/core';

import {
    Home as HomeIcon
    , Grain as GrainIcon
    , Work as WorkIcon
} from '@material-ui/icons';

const styles = (theme: Theme) => ({
    root: {
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    },
    link: {
        display: 'flex',
    },
    icon: {
        marginRight: theme.spacing.unit / 2,
        width: 20,
        height: 20,
    },
});

const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.preventDefault();
    alert('You clicked a breadcrumb.');
}

const IconBreadcrumbs = (props: any) => {
    const { classes } = props;
    return (
        <Paper className={classes.root}>
            <Breadcrumbs arial-label="Breadcrumb">
                <Link color="inherit" href="/" onClick={handleClick} className={classes.link}>
                    <HomeIcon className={classes.icon} />
                    Home
                </Link>
                <Typography color="textPrimary" className={classes.link}>
                    <WorkIcon className={classes.icon} />
                    Companies
                </Typography>
            </Breadcrumbs>
        </Paper>
    );
}

const Breadcrumb = withStyles(styles)(IconBreadcrumbs);

export { Breadcrumb };