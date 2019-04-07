import React from 'react';

/* Material Imports */
import { withStyles, Theme } from '@material-ui/core/styles';

import {
    Typography
    , Grid
    , Button
} from '@material-ui/core';
import { CompanyAddDialog } from './CompanyAddDialog';

import { ICompanyTableHeader, ICompanyTableHeaderState } from './interfaces';

class CompanyTableHeaderComponent extends React.Component<ICompanyTableHeader> {
    state: ICompanyTableHeaderState = {
        open: false
    };

    openAddDialog = () => {
        this.setState({ open: true });
    };

    closeAddDialog = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;
        const { open } = this.state;

        return (
            <Grid container style={{ flex: 1 }}>
                <Grid style={{ textAlign: 'left' }} item sm={10} xs>
                    <Typography className={classes.tableTitle} component="h2" variant="display1" gutterBottom>
                        Companies List
                    </Typography>
                </Grid>
                <Grid style={{ textAlign: 'right' }} item sm={2} xs>
                    <Button variant="contained" color="primary" className={classes.tableAddButton} onClick={this.openAddDialog}>
                        Add new
                    </Button>
                </Grid>
                <CompanyAddDialog
                    open={open}
                    closeDialogAction={this.closeAddDialog}
                />
            </Grid>
        );
    }
}

const styles = (theme: Theme) => ({
    tableTitle: {
        marginLeft: '20px',
        marginTop: '20px'
    },
    tableAddButton: {
        marginRight: '20px',
        marginTop: '20px'
    }
});

const CompanyTableHeader = withStyles(styles)(CompanyTableHeaderComponent);

export { CompanyTableHeader };