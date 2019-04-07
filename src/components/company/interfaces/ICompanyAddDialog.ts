import { CompanyFormModel } from "../models";

export interface ICompanyAddDialog {
    formData?: CompanyFormModel;
    open: boolean;
    closeDialogAction(): void;
};