import { CompanyFormModel } from '../models';
import { ICompanyFormReducer } from '../interfaces';
import { companyActionTypes } from '../actions';

const INITIAL_STATE: ICompanyFormReducer = {
    data: new CompanyFormModel()
};

const CompanyFormReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case companyActionTypes.SET_COMPANY_FORM:
            return {
                ...state,
                data: Object.assign(new CompanyFormModel(), action.payload)
            }
        default:
            return state;
    }
}

export { CompanyFormReducer };