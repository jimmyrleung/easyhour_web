import React, { ReactNode } from 'react';
import { Theme, Paper } from '@material-ui/core';
import { CompanyTable } from './CompanyTable';
import { Breadcrumb } from '../common/breadcrumb';

interface ICompanyPage {
    children?: ReactNode;
    // theme: Theme;
    // classes: any;
};

class CompanyPage extends React.Component<ICompanyPage> {
    render() {
        const { paperStyle } = styles;
        return (
            <Paper elevation={1} style={paperStyle}>
                <Breadcrumb />
                <CompanyTable />
            </Paper>
        );
    }
}

const styles = {
    paperStyle: {
        width: '100%',
        padding: '24px'
    }
};

export { CompanyPage };