import { companyActionTypes as actionTypes } from './';
import { CompanyFormModel } from "../models";

export const setCompanyForm = (companyForm: CompanyFormModel) => {
    return {
        type: actionTypes.SET_COMPANY_FORM,
        payload: companyForm
    }
}