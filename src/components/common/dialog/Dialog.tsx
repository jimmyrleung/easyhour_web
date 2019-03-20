import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

interface IDialog {
    open: boolean;
    title: string;
    description: string;
    closeDialogAction(): void;
    cancelButtonLabel: string;
    confirmButtonAction(): void;
    confirmButtonLabel: string;
}

class CustomDialog extends React.Component<IDialog> {
    state = {
        open: false
    };

    render() {
        return (
            <Dialog
                open={this.props.open}
                onClose={this.props.closeDialogAction}
                aria-labelledby="form-dialog-title"
                fullWidth={true}
            >
                <DialogTitle id="form-dialog-title">{this.props.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {this.props.description}
                    </DialogContentText>
                    {/* <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                    /> */}
                    {this.props.children}
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.closeDialogAction} color="primary">
                        {this.props.cancelButtonLabel}
                    </Button>
                    <Button onClick={this.props.confirmButtonAction} color="primary">
                        {this.props.confirmButtonLabel}
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export { CustomDialog };