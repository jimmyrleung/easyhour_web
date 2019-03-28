import React from 'react';
import { CustomDialog } from '../common/dialog';
import { CompanyForm } from './';

// TODO: move to constants
const dialogDescription = 'To register a new company, please fill out the form below.';

interface IAddCompanyDialog {
    open: boolean;
    closeDialogAction(): void;
    confirmButtonAction(): void;
};

class CompanyAddDialog extends React.Component<IAddCompanyDialog> {

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

export { CompanyAddDialog };