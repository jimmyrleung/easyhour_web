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

    state: CompanyFormModel = new CompanyFormModel();

    handleChange(field: string, e: any) {
        if (e.target) {
            this.setState({
                ...this.state,
                [field]: e.target.value
            }, () => {
                if (this.props.setCompanyForm) {
                    this.props.setCompanyForm(this.state);
                }
            });

        }
    }

    handleBlur(field: string) {
        const fieldTouched = `${field}Touched`;

        this.setState({
            ...this.state,
            [fieldTouched]: true
        });
    }

    render() {
        const { classes } = this.props;

        // Workaround solution to use the getters from the model
        const companyForm =
            Object.assign(new CompanyFormModel(), this.state);

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
                        value={this.state.companyName}
                        error={companyForm.companyNameHasError}
                        helperText={companyForm.companyNameHelperText}
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
                        value={this.state.tradingName}
                        error={companyForm.tradingNameHasError}
                        helperText={companyForm.tradingNameHelperText}
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
                        value={this.state.registerNumber}
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
                                error={companyForm.registerNumberHasError}
                                helperText={companyForm.registerNumberHelperText}
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
                        value={this.state.zipcode}
                    >
                        {(inputProps: any) =>
                            <TextField
                                fullWidth
                                id="outlined-zipcode"
                                label="Zipcode"
                                margin="normal"
                                variant="outlined"
                                classes={classes.textField}
                                error={companyForm.zipcodeHasError}
                                helperText={companyForm.zipcodeHelperText}
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
                        error={companyForm.emailHasError}
                        value={this.state.email}
                        helperText={companyForm.emailHelperText}
                        inputProps={{
                            maxLength: UserConfig.USER_EMAIL_MAX_LENGTH
                        }}
                    />
                </Grid>
                {/* Verify if this checkbox is really needed */}
                {/* <Grid style={{ textAlign: 'left' }} item sm={12} xs>
                    <Checkbox
                        // checked={this.state.checkedG}
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
                        value={this.state.name}
                        error={companyForm.nameHasError}
                        helperText={companyForm.nameHelperText}
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
                        value={this.state.login}
                        error={companyForm.loginHasError}
                        helperText={companyForm.loginHelperText}
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
                        type={this.state.showPassword ? 'text' : 'password'}
                        label="Password"
                        value={this.state.password}
                        onChange={this.handleChange.bind(this, 'password')}
                        onBlur={this.handleBlur.bind(this, 'password')}
                        error={companyForm.passwordHasError}
                        helperText={companyForm.passwordHelperText}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="Toggle password visibility"
                                        onClick={() => this.setState({ showPassword: !this.state.showPassword })}
                                    >
                                        {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
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
                        type={this.state.showConfirmPassword ? 'text' : 'password'}
                        label="Confirm Password"
                        value={this.state.confirmPassword}
                        error={companyForm.confirmPasswordHasError}
                        helperText={companyForm.confirmPasswordHelperText}
                        onChange={this.handleChange.bind(this, 'confirmPassword')}
                        onBlur={this.handleBlur.bind(this, 'confirmPassword')}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="Toggle password visibility"
                                        onClick={() => this.setState({ showConfirmPassword: !this.state.showConfirmPassword })}
                                    >
                                        {this.state.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
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
    console.log(state);
}

const mapDispatchToProps = { setCompanyForm };

const CompanyFormConnected = connect(mapStateToProps, mapDispatchToProps)(CompanyFormComponent);
const CompanyForm = withStyles(styles)(CompanyFormConnected);

export { CompanyForm };
