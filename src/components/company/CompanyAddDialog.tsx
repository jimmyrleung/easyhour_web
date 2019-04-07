import React from 'react';
import { connect } from 'react-redux';
import { CustomDialog } from '../common/dialog';
import { CompanyForm } from './';
import { CompanyFormModel } from './models';

// TODO: move to constants
const dialogDescription = 'To register a new company, please fill out the form below.';

interface IAddCompanyDialog {
    formData: CompanyFormModel;
    open: boolean;
    closeDialogAction(): void;
    confirmButtonAction(): void;
};

class CompanyAddDialogComponent extends React.Component<IAddCompanyDialog> {

    render() {
        const { open, closeDialogAction, confirmButtonAction } = this.props;
        return (
            <CustomDialog
                open={open}
                title='Add company'
                description={dialogDescription}
                closeDialogAction={closeDialogAction}
                confirmButtonAction={confirmButtonAction}
                confirmButtonLabel='Confirm'
                cancelButtonLabel='Cancel'
            >
                <CompanyForm />
            </CustomDialog>
        )
    }
}

// TODO: After creating an interface to the application state,
// type the state parameter
const mapStateToProps = (state: any) => {
    console.log("Redux Application State", state);
    // const { name, phone, shift } = state.employeeForm;

    // return { name, phone, shift };
};

const CompanyAddDialog = connect(mapStateToProps)(CompanyAddDialogComponent);

export { CompanyAddDialog };