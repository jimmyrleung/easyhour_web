import React from 'react';
import { connect } from 'react-redux';
import { TextField, Grid, Checkbox, Divider, Typography, InputAdornment, IconButton } from '@material-ui/core';
import { withStyles, Theme } from '@material-ui/core/styles';
import { ICompanyForm } from './interfaces';
import InputMask from 'react-input-mask';
import { VisibilityOff, Visibility } from '@material-ui/icons';
import { CompanyFormModel } from './models';
import { CompanyConfig } from './constants';
import { UserConfig } from '../users/constants';
import {
    setCompanyForm
} from './actions';

import { IApplicationState } from '../../config/interfaces';

class CompanyFormComponent extends React.Component<ICompanyForm> {

    static defaultProps = {
        formData: new CompanyFormModel()
    }

    handleChange(field: string, e: any) {
        if (e.target && this.props.setCompanyForm) {
            this.props.setCompanyForm(Object.assign(this.props.formData, {
                [field]: e.target.value
            }));
        }
    }

    handleBlur(field: string) {
        const fieldTouched = `${field}Touched`;

        if (this.props.setCompanyForm) {
            this.props.setCompanyForm(Object.assign(this.props.formData, {
                [fieldTouched]: true
            }));
        }
    }

    render() {
        const { classes, formData } = this.props;

        return (
            <Grid container style={{ flex: 1 }}>
                <Grid style={{ textAlign: 'left' }} item sm={12} xs={12}>
                    <TextField
                        required
                        fullWidth
                        id="outlined-company-name"
                        label="Company Name"
                        margin="normal"
                        variant="outlined"
                        classes={classes.textField}
                        onChange={this.handleChange.bind(this, 'companyName')}
                        onBlur={this.handleBlur.bind(this, 'companyName')}
                        value={formData.companyName}
                        error={formData.companyNameHasError}
                        helperText={formData.companyNameHelperText}
                        inputProps={{
                            maxLength: CompanyConfig.COMPANY_NAME_MAX_LENGTH
                        }}
                    />
                </Grid>
                <Grid style={{ textAlign: 'left' }} item sm={12} xs={12} >
                    <TextField
                        required
                        fullWidth
                        id="outlined-trading-name"
                        label="Trading Name"
                        margin="normal"
                        variant="outlined"
                        classes={classes.textField}
                        onChange={this.handleChange.bind(this, 'tradingName')}
                        onBlur={this.handleBlur.bind(this, 'tradingName')}
                        value={formData.tradingName}
                        error={formData.tradingNameHasError}
                        helperText={formData.tradingNameHelperText}
                        inputProps={{
                            maxLength: CompanyConfig.TRADING_NAME_MAX_LENGTH
                        }}
                    />
                </Grid>
                <Grid style={{ textAlign: 'left', paddingRight: '10px' }} item sm={8} xs={12}>
                    <InputMask
                        mask='99.999.999/9999-99'
                        onChange={this.handleChange.bind(this, 'registerNumber')}
                        onBlur={this.handleBlur.bind(this, 'registerNumber')}
                        value={formData.registerNumber}
                    >
                        {(inputProps: any) =>
                            <TextField
                                required
                                fullWidth
                                id="outlined-register-name"
                                label="Register Number"
                                margin="normal"
                                variant="outlined"
                                classes={classes.textField}
                                error={formData.registerNumberHasError}
                                helperText={formData.registerNumberHelperText}
                                {...inputProps}
                            />
                        }
                    </InputMask>
                </Grid>
                <Grid style={{ textAlign: 'left' }} item sm={4} xs={12}>
                    {/* TODO: Desvincular de CEP */}
                    <InputMask
                        mask='99999-999'
                        onChange={this.handleChange.bind(this, 'zipcode')}
                        onBlur={this.handleBlur.bind(this, 'zipcode')}
                        value={formData.zipcode}
                    >
                        {(inputProps: any) =>
                            <TextField
                                fullWidth
                                id="outlined-zipcode"
                                label="Zipcode"
                                margin="normal"
                                variant="outlined"
                                classes={classes.textField}
                                error={formData.zipcodeHasError}
                                helperText={formData.zipcodeHelperText}
                                {...inputProps}
                            />
                        }
                    </InputMask>
                </Grid>
                <Grid style={{ textAlign: 'left', paddingRight: '10px' }} item sm={8} xs={12}>
                    <TextField
                        required
                        fullWidth
                        id="outlined-email"
                        label="E-mail"
                        margin="normal"
                        variant="outlined"
                        classes={classes.textField}
                        onChange={this.handleChange.bind(this, 'email')}
                        onBlur={this.handleBlur.bind(this, 'email')}
                        error={formData.emailHasError}
                        value={formData.email}
                        helperText={formData.emailHelperText}
                        inputProps={{
                            maxLength: UserConfig.USER_EMAIL_MAX_LENGTH
                        }}
                    />
                </Grid>
                {/* Verify if this checkbox is really needed */}
                {/* <Grid style={{ textAlign: 'left' }} item sm={12} xs>
                    <Checkbox
                        // checked={formData.checkedG}
                        // onChange={this.handleChange('checkedG')}
                        // value="checkedG"
                        classes={{ root: classes.root, checked: classes.checked }}
                    />Customer
                </Grid> */}
                <Grid style={{ textAlign: 'left', padding: '10px 0' }} item sm={12} xs={12}>
                    <Divider />
                    <Typography className={classes.newUserText}>
                        Register the first user for that company.
                    </Typography>
                </Grid>
                <Grid style={{ textAlign: 'left', paddingRight: '10px' }} item sm={6} xs={12}>
                    <TextField
                        required
                        fullWidth
                        id="outlined-user-name"
                        label="Name"
                        margin="normal"
                        variant="outlined"
                        classes={classes.textField}
                        onChange={this.handleChange.bind(this, 'name')}
                        onBlur={this.handleBlur.bind(this, 'name')}
                        value={formData.name}
                        error={formData.nameHasError}
                        helperText={formData.nameHelperText}
                        inputProps={{
                            maxLength: UserConfig.USER_NAME_MAX_LENGTH
                        }}
                    />
                </Grid>
                <Grid style={{ textAlign: 'left' }} item sm={6} xs={12}>
                    <TextField
                        required
                        fullWidth
                        id="outlined-login-name"
                        label="Login"
                        margin="normal"
                        variant="outlined"
                        classes={classes.textField}
                        onChange={this.handleChange.bind(this, 'login')}
                        onBlur={this.handleBlur.bind(this, 'login')}
                        value={formData.login}
                        error={formData.loginHasError}
                        helperText={formData.loginHelperText}
                        inputProps={{
                            maxLength: UserConfig.USER_LOGIN_MAX_LENGTH
                        }}
                    />
                </Grid>
                <Grid style={{ textAlign: 'left', paddingTop: '14px', paddingRight: '10px' }} item sm={6} xs={12}>
                    <TextField
                        required
                        fullWidth
                        id="outlined-adornment-password"
                        classes={classes.textField}
                        variant="outlined"
                        type={formData.showPassword ? 'text' : 'password'}
                        label="Password"
                        value={formData.password}
                        onChange={this.handleChange.bind(this, 'password')}
                        onBlur={this.handleBlur.bind(this, 'password')}
                        error={formData.passwordHasError}
                        helperText={formData.passwordHelperText}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="Toggle password visibility"
                                        onClick={() => this.setState({ showPassword: !formData.showPassword })}
                                    >
                                        {formData.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                        inputProps={{
                            maxLength: UserConfig.USER_PASSWORD_MAX_LENGTH
                        }}
                    />
                </Grid>
                <Grid style={{ textAlign: 'left', paddingTop: '14px' }} item sm={6} xs={12}>
                    <TextField
                        required
                        fullWidth
                        id="outlined-adornment-confirm-password"
                        classes={classes.textField}
                        variant="outlined"
                        type={formData.showConfirmPassword ? 'text' : 'password'}
                        label="Confirm Password"
                        value={formData.confirmPassword}
                        error={formData.confirmPasswordHasError}
                        helperText={formData.confirmPasswordHelperText}
                        onChange={this.handleChange.bind(this, 'confirmPassword')}
                        onBlur={this.handleBlur.bind(this, 'confirmPassword')}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="Toggle password visibility"
                                        onClick={() => this.setState({ showConfirmPassword: !formData.showConfirmPassword })}
                                    >
                                        {formData.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                        inputProps={{
                            maxLength: UserConfig.USER_PASSWORD_MAX_LENGTH
                        }}
                    />
                </Grid>
            </Grid>
        )
    }
}

const styles = (theme: Theme) => ({
    textField: {
        flex: 1
    },
    root: {
        paddingLeft: '0px !important',
        color: '#4caf50',
        '&$checked': {
            color: '#4caf50'
        }
    },
    checked: {},
    newUserText: {
        fontSize: '1rem',
        color: 'rgba(0, 0, 0, 0.54)',
        paddingTop: '10px'
    }
});

const mapStateToProps = (state: IApplicationState) => {
    return {
        formData: state.companyForm.data
    }
}

const mapDispatchToProps = { setCompanyForm };

const CompanyFormConnected = connect(mapStateToProps, mapDispatchToProps)(CompanyFormComponent);
const CompanyForm = withStyles(styles)(CompanyFormConnected);

export { CompanyForm };
