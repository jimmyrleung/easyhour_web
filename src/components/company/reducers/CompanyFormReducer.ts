import { CompanyFormModel } from '../models';
import { ICompanyFormReducer } from '../interfaces';

const INITIAL_STATE: ICompanyFormReducer = {
    data: new CompanyFormModel()
};

const CompanyFormReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        default:
            return state;
    }
}

export { CompanyFormReducer };