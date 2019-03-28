import React from 'react';
import { TextField, Grid, Checkbox } from '@material-ui/core';
import { withStyles, Theme } from '@material-ui/core/styles';
import { ICompanyForm } from './interfaces';
import InputMask from 'react-input-mask';

class CompanyFormComponent extends React.Component<ICompanyForm> {

    render() {
        const { classes } = this.props;
        return (
            <Grid container style={{ flex: 1 }}>
                <Grid style={{ textAlign: 'left' }} item sm={12} xs>
                    <TextField
                        required
                        fullWidth
                        id="outlined-company-name"
                        label="Company Name"
                        margin="normal"
                        variant="outlined"
                        classes={classes.textField}
                    />
                </Grid>
                <Grid style={{ textAlign: 'left' }} item sm={12} xs>
                    <TextField
                        required
                        fullWidth
                        id="outlined-trading-name"
                        label="Trading Name"
                        margin="normal"
                        variant="outlined"
                        classes={classes.textField}
                    />
                </Grid>
                <Grid style={{ textAlign: 'left', paddingRight: '10px' }} item sm={8} xs>
                    <InputMask
                        // onChange
                        // value
                        mask='99.999.999/9999-99'
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
                <Grid style={{ textAlign: 'left' }} item sm={4} xs>
                    <TextField
                        required
                        fullWidth
                        id="outlined-zipcode"
                        label="Zipcode"
                        margin="normal"
                        variant="outlined"
                        classes={classes.textField}
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
            </Grid >
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
    checked: {}
});

const CompanyForm = withStyles(styles)(CompanyFormComponent);

export { CompanyForm };