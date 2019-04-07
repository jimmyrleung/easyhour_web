import { combineReducers } from 'redux';
import { CompanyFormReducer } from './company/reducers'

export default combineReducers({
    companyForm: CompanyFormReducer // TODO: Create a interface to the application state
});