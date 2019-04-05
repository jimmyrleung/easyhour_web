import { CommonConstants } from '../../common/constants';

export class CompanyFormModel {
    showPassword: boolean = false;
    showConfirmPassword: boolean = false;
    companyName: string = '';
    tradingName: string = '';
    zipcode: string = '';
    registerNumber: string = '';
    name: string = '';
    email: string = '';
    login: string = '';
    password: string = '';
    confirmPassword: string = '';

    /* Helper Texts */
    // companyNameHelperText: string = '';
    tradingNameHelperText: string = '';
    zipcodeHelperText: string = '';
    registerNumberHelperText: string = '';
    emailHelperText: string = '';
    nameHelperText: string = '';
    loginHelperText: string = '';
    passwordHelperText: string = '';
    confirmPasswordHelperText: string = '';

    //TODO: Finish the field validation
    get companyNameHasError(): boolean {
        return !this.companyName;
    }

    get tradingNameHasError(): boolean {
        return !this.tradingName;
    }

    get registerNumberHasError(): boolean {
        // TODO: Add validação CNPJ
        return !this.registerNumber;
    }

    get nameHasError(): boolean {
        return !this.name;
    }

    get emailHasError(): boolean {
        return !this.email;
    }

    get loginHasError(): boolean {
        return !this.login;
    }

    get passwordHasError(): boolean {
        return !this.password;
    }

    get confirmPasswordHasError(): boolean {
        return !this.confirmPassword;
    }

    get arePasswordsMatching(): boolean {
        return this.password !== this.confirmPassword;
    }

    // TODO: Finish helper text for each field
    get companyNameHelperText(): string {
        return this.companyNameHasError ?
            'The company name is required.' : '';
    }
}