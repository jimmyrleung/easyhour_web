import React from 'react';
import { withStyles, Theme } from '@material-ui/core/styles';

import {
    Table
    , TableBody
    , TableCell
    , TableHead
    , TableRow
    , Paper
    , IconButton
} from '@material-ui/core';

import {
    Edit as EditIcon
    , Delete as DeleteIcon
} from '@material-ui/icons';

const styles = (theme: Theme) => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto'
    },
    table: {
        minWidth: 700,
    }
});

const CompanyTableRows = [{
    id: 1,
    companyName: 'Test Company 1 LTDA',
    tradingName: 'Test Company 1',
    zipcode: '04090-003',
    registerNumber: '22.620.251/0001-01',
}, {
    id: 2,
    companyName: 'Test Company 2 LTDA',
    tradingName: 'Test Company 2',
    zipcode: '04090-003',
    registerNumber: '88.544.437/0001-37',
}, {
    id: 3,
    companyName: 'Test Company 3 LTDA',
    tradingName: 'Test Company 3',
    zipcode: '04090-003',
    registerNumber: '76.868.372/0001-04',
}, {
    id: 4,
    companyName: 'Test Company 4 LTDA',
    tradingName: 'Test Company 4',
    zipcode: '04090-003',
    registerNumber: '84.855.287/0001-21',
},];

const CompanyTableComponent = (props: any) => {
    const { classes } = props;

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Company Name</TableCell>
                        <TableCell>Trading name</TableCell>
                        <TableCell>Register Number</TableCell>
                        <TableCell>Zip code</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {CompanyTableRows.map(row => (
                        <TableRow key={row.id} hover>
                            <TableCell component="th" scope="row">
                                {row.companyName}
                            </TableCell>
                            <TableCell>{row.tradingName}</TableCell>
                            <TableCell>{row.registerNumber}</TableCell>
                            <TableCell>{row.zipcode}</TableCell>
                            <TableCell align="right">
                                <IconButton
                                    color="inherit"
                                    aria-label="Delete Item"
                                >
                                    <DeleteIcon />
                                </IconButton>
                                <IconButton
                                    color="inherit"
                                    aria-label="Edit Item"
                                >
                                    <EditIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}

const CompanyTable = withStyles<"table">(styles, { withTheme: true })(CompanyTableComponent);

export { CompanyTable };