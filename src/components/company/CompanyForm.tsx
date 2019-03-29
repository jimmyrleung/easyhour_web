import React, { SyntheticEvent } from 'react';
import { TextField, Grid, Checkbox, Divider, Typography, InputAdornment, IconButton } from '@material-ui/core';
import { withStyles, Theme } from '@material-ui/core/styles';
import { ICompanyForm, ICompanyFormState } from './interfaces';
import InputMask from 'react-input-mask';
import { VisibilityOff, Visibility } from '@material-ui/icons';

class CompanyFormComponent extends React.Component<ICompanyForm> {

    state: ICompanyFormState = {
        showPassword: false,
        showConfirmPassword: false,
        companyName: '',
        tradingName: '',
        zipcode: '',
        registerNumber: '',
        email: '',
        name: '',
        login: '',
        password: '',
        confirmPassword: ''
    }

    handleChange(field: string, e: any) {
        if (e.target) {
            this.setState({ [field]: e.target.value });
        }
    }

    render() {
        const { classes } = this.props;
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
                        value={this.state.companyName}
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
                        value={this.state.tradingName}
                    />
                </Grid>
                <Grid style={{ textAlign: 'left', paddingRight: '10px' }} item sm={8} xs={12}>
                    <InputMask
                        mask='99.999.999/9999-99'
                        onChange={this.handleChange.bind(this, 'registerNumber')}
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
                        value={this.state.zipcode}
                    >
                        {(inputProps: any) =>
                            <TextField
                                required
                                fullWidth
                                id="outlined-zipcode"
                                label="Zipcode"
                                margin="normal"
                                variant="outlined"
                                classes={classes.textField}
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
                        value={this.state.email}
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
                        Register the first user for that company
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
                        value={this.state.name}
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
                        value={this.state.login}
                    />
                </Grid>
                <Grid style={{ textAlign: 'left', paddingTop: '14px', paddingRight: '10px'  }} item sm={6} xs={12}>
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
                        onChange={this.handleChange.bind(this, 'confirmPassword')}
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

const CompanyForm = withStyles(styles)(CompanyFormComponent);

export { CompanyForm };