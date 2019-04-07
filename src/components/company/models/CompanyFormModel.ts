import { CommonConstants } from '../../common/constants';
import { CompanyConfig } from '../constants';
import { UserConfig } from '../../users/constants';

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

    companyNameTouched: boolean = false;
    tradingNameTouched: boolean = false;
    zipcodeTouched: boolean = false;
    registerNumberTouched: boolean = false;
    nameTouched: boolean = false;
    emailTouched: boolean = false;
    loginTouched: boolean = false;
    passwordTouched: boolean = false;
    confirmPasswordTouched: boolean = false;

    get companyNameHasError(): boolean {
        const companyNameValid =
            this.companyName.length >= CompanyConfig.COMPANY_NAME_MIN_LENGTH;

        return this.companyNameTouched &&
            (!this.companyName || !companyNameValid);

    }

    get tradingNameHasError(): boolean {
        const tradingNameValid =
            this.tradingName.length >= CompanyConfig.TRADING_NAME_MIN_LENGTH;

        return this.tradingNameTouched &&
            (!this.tradingName || !tradingNameValid);
    }

    get registerNumberHasError(): boolean {
        // TODO: Add CNPJ Validation
        // const cnpjValid = 
        const cnpjFormatValid =
            CommonConstants.cnpjRegex.test(this.registerNumber);

        return this.registerNumberTouched &&
            (!this.registerNumber || !cnpjFormatValid);
    }

    get zipcodeHasError(): boolean {
        const zipcodeFormatValid =
            CommonConstants.zipcodeRegex.test(this.zipcode);

        return this.zipcodeTouched && !zipcodeFormatValid;
    }

    get nameHasError(): boolean {
        const nameValid =
            this.name.length >= UserConfig.USER_NAME_MIN_LENGTH;

        return this.nameTouched &&
            (!this.name || !nameValid);
    }

    get emailHasError(): boolean {
        const isEmailValid =
            CommonConstants.emailRegex.test(this.email);

        return this.emailTouched && (!this.email || !isEmailValid);
    }

    get loginHasError(): boolean {
        const isLoginValid =
            this.login.length >= UserConfig.USER_LOGIN_MIN_LENGTH;

        return this.loginTouched && (!this.login || !isLoginValid);
    }

    get passwordHasError(): boolean {
        const isPasswordValid =
            CommonConstants.passwordRegex.test(this.password);

        return this.passwordTouched && (!this.password || !isPasswordValid);
    }

    get confirmPasswordHasError(): boolean {
        return this.confirmPasswordTouched &&
            (!this.confirmPassword || !this.arePasswordsMatching);
    }

    get arePasswordsMatching(): boolean {
        return this.password === this.confirmPassword;
    }

    get companyNameHelperText(): string {
        return this.companyNameHasError ?
            `The company name is required and must have at least ${CompanyConfig.COMPANY_NAME_MIN_LENGTH} characters.` :
            `${this.companyName.length}/${CompanyConfig.COMPANY_NAME_MAX_LENGTH}`;
    }

    get tradingNameHelperText(): string {
        return this.tradingNameHasError ?
            `The trading name is required and must have at least ${CompanyConfig.TRADING_NAME_MIN_LENGTH} characters.` :
            `${this.tradingName.length}/${CompanyConfig.TRADING_NAME_MAX_LENGTH}`;
    }

    get registerNumberHelperText(): string {
        return this.registerNumberHasError ?
            `The register number is required and must be in a valid format.` : ``;
    }

    get zipcodeHelperText(): string {
        return this.zipcodeHasError ?
            `The zipcode must be in a valid format.` : ``;
    }

    get emailHelperText(): string {
        return this.emailHasError ?
            `The email is required and must be in a valid format.` :
            `${this.email.length}/${UserConfig.USER_EMAIL_MAX_LENGTH}`;
    }

    get nameHelperText(): string {
        return this.nameHasError ?
            `The name is required and must have at least ${UserConfig.USER_NAME_MIN_LENGTH} characters.` :
            `${this.name.length}/${UserConfig.USER_NAME_MAX_LENGTH}`;
    }

    get loginHelperText(): string {
        return this.loginHasError ?
            `The login is required and must have at least ${UserConfig.USER_LOGIN_MIN_LENGTH} characters.` :
            `${this.login.length}/${UserConfig.USER_LOGIN_MAX_LENGTH}`;
    }

    get passwordHelperText(): string {
        return this.passwordHasError ?
            `The password is required, must have at least ${UserConfig.USER_PASSWORD_MIN_LENGTH} characters, a capital letter and one special character.` :
            `${this.password.length}/${UserConfig.USER_PASSWORD_MAX_LENGTH}`;
    }

    get confirmPasswordHelperText(): string {
        if (this.confirmPasswordTouched && !this.confirmPassword) {
            return `You must confirm your password.`;
        }
        else if (this.passwordTouched && this.confirmPasswordTouched && !this.arePasswordsMatching) {
            return `The passwords aren't matching.`;
        }
        else {
            return `${this.confirmPassword.length}/${UserConfig.USER_PASSWORD_MAX_LENGTH}`;
        }
    }

}

// Function as a property vs function
// class test {
//     test = 'test';

//     // This won't be available at the object instance
//     _print_() {
//         console.log(this.test);
//     }

//     // This will be available at the object instance
//     __print__ = () => {
//         console.log(this.test);
//     }
// }