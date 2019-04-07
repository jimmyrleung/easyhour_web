export const CommonConstants = {
    emailRegex: /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/,
    passwordRegex: /^(?:(?=.*[a-z])(?:(?=.*[A-Z])(?=.*\d\W)|(?=.*[A-Z])(?=.*\W)(?=.*\d))|(?=.*\W)(?=.*[A-Z])(?=.*\d)).{6,20}$/,
    zipcodeRegex: /^\d{5}-\d{3}$/,
    cnpjRegex: /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/,
}
