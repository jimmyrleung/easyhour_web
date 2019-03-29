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

    /* Error flags */
    companyNameHasError: boolean = false;
    tradingNameHasError: boolean = false;
    zipcodeHasError: boolean = false;
    registerNumberHasError: boolean = false;
    emailHasError: boolean = false;
    nameHasError: boolean = false;
    loginHasError: boolean = false;
    passwordHasError: boolean = false;
    confirmPasswordHasError: boolean = false;

    companyNameHelperText: string = '';
    tradingNameHelperText: string = '';
    zipcodeHelperText: string = '';
    registerNumberHelperText: string = '';
    emailHelperText: string = '';
    nameHelperText: string = '';
    loginHelperText: string = '';
    passwordHelperText: string = '';
    confirmPasswordHelperText: string = '';
}