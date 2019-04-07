import React from 'react';
import { connect } from 'react-redux';
import { CustomDialog } from '../common/dialog';
import { CompanyForm } from './';
import { CompanyFormModel } from './models';
import { ICompanyAddDialog } from './interfaces';
import { IApplicationState } from '../../config/interfaces';

// TODO: move to constants
const dialogDescription = 'To register a new company, please fill out the form below.';



class CompanyAddDialogComponent extends React.Component<ICompanyAddDialog> {

    onConfirmButtonClick() {
        console.log('Confirm Button Clicked!');
    }

    render() {
        const { open, closeDialogAction, formData } = this.props;

        return (
            <CustomDialog
                open={open}
                title='Add company'
                description={dialogDescription}
                closeDialogAction={closeDialogAction}
                confirmButtonAction={this.onConfirmButtonClick.bind(this)}
                confirmButtonLabel='Confirm'
                cancelButtonLabel='Cancel'
            >
                <CompanyForm />
            </CustomDialog>
        )
    }
}

const mapStateToProps = (state: IApplicationState) => {
    return {
        formData: state.companyForm.data
    };
};

const CompanyAddDialog = connect(mapStateToProps)(CompanyAddDialogComponent);

export { CompanyAddDialog };