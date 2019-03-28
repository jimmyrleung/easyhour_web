import React from 'react';

/* Material Imports */
import { withStyles, Theme } from '@material-ui/core/styles';

import {
    Table
    , TableHead
    , TableBody
    , TableCell
    , TableFooter
    , TablePagination
    , TableRow
    , Paper
    , IconButton
} from '@material-ui/core';

/* Custom Imports */
import { CompanyTableActions, CompanyTableHeader, CompanyTableItem } from './';
import { ICompanyTable, ICompanyTableState, ICompanyModel } from './interfaces';

const CompanyTableRows: ICompanyModel[] = [{
    id: 1,
    companyName: 'Test Company 1 LTDA',
    tradingName: 'Test Company 1',
    zipcode: '04090-003',
    registerNumber: '22.620.251/0001-01'
}, {
    id: 2,
    companyName: 'Test Company 2 LTDA',
    tradingName: 'Test Company 2',
    zipcode: '04090-003',
    registerNumber: '88.544.437/0001-37'
}, {
    id: 3,
    companyName: 'Test Company 3 LTDA',
    tradingName: 'Test Company 3',
    zipcode: '04090-003',
    registerNumber: '76.868.372/0001-04'
}, {
    id: 4,
    companyName: 'Test Company 4 LTDA',
    tradingName: 'Test Company 4',
    zipcode: '04090-003',
    registerNumber: '84.855.287/0001-21'
}, {
    id: 5,
    companyName: 'Test Company 5 LTDA',
    tradingName: 'Test Company 5',
    zipcode: '04090-003',
    registerNumber: '84.855.287/0001-21'
}, {
    id: 6,
    companyName: 'Test Company 6 LTDA',
    tradingName: 'Test Company 6',
    zipcode: '04090-003',
    registerNumber: '22.620.251/0001-01'
}, {
    id: 7,
    companyName: 'Test Company 7 LTDA',
    tradingName: 'Test Company 7',
    zipcode: '04090-003',
    registerNumber: '88.544.437/0001-37'
}, {
    id: 8,
    companyName: 'Test Company 8 LTDA',
    tradingName: 'Test Company 8',
    zipcode: '04090-003',
    registerNumber: '76.868.372/0001-04'
}, {
    id: 9,
    companyName: 'Test Company 9 LTDA',
    tradingName: 'Test Company 9',
    zipcode: '04090-003',
    registerNumber: '84.855.287/0001-21'
}, {
    id: 10,
    companyName: 'Test Company 10 LTDA',
    tradingName: 'Test Company 10',
    zipcode: '04090-003',
    registerNumber: '84.855.287/0001-21'
}];

class CompanyTableComponent extends React.Component<ICompanyTable> {
    state: ICompanyTableState = {
        rows: [],
        page: 0,
        rowsPerPage: 5,
        count: 0
    };

    async componentDidMount() {
        await this.updateRows();
    };

    async updateRows() {
        const { page, rowsPerPage } = this.state;
        const newRows = [...CompanyTableRows].splice(page * rowsPerPage, rowsPerPage);
        await this.setState({ rows: newRows, count: CompanyTableRows.length });
    };

    handleChangePage = async (event: any, page: Number) => {
        await this.setState({ page });
        await this.updateRows();
    };

    handleChangeRowsPerPage = async (event: any) => {
        await this.setState({ page: 0, rowsPerPage: event.target.value });
        await this.updateRows();
    };

    render() {
        const { classes } = this.props;
        const { rows, rowsPerPage, page, count } = this.state;

        return (
            <Paper className={classes.root}>
                <div className={classes.tableWrapper}>
                    <CompanyTableHeader />
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
                            {rows.map(row => (
                                <CompanyTableItem item={row} />
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 25]}
                                    colSpan={3}
                                    count={count}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    SelectProps={{
                                        native: true,
                                    }}
                                    onChangePage={this.handleChangePage}
                                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                                    ActionsComponent={CompanyTableActions}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </div>
            </Paper>
        );
    }
}

const styles = (theme: Theme) => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3
    },
    table: {
        minWidth: 500
    },
    tableWrapper: {
        overflowX: 'auto'
    }
});

const CompanyTable = withStyles<"table">(styles)(CompanyTableComponent);

export { CompanyTable };