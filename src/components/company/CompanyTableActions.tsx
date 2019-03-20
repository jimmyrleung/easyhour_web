import React, { ReactNode } from "react";
import { IconButton, withStyles, Theme } from "@material-ui/core";
import { TablePaginationProps } from "@material-ui/core/TablePagination";
import {
    FirstPage as FirstPageIcon
    , KeyboardArrowLeft as KeyboardArrowLeftIcon
    , KeyboardArrowRight as KeyboardArrowRightIcon
    , LastPage as LastPageIcon
} from '@material-ui/icons';

const actionsStyles = (theme: Theme) => ({
    root: {
        flexShrink: 0,
        color: theme.palette.text.secondary,
        marginLeft: theme.spacing.unit * 2.5
    }
});

class CompanyTableActionsComponent extends React.Component<TablePaginationProps> {

    handleFirstPageButtonClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        this.props.onChangePage(event, 0);
    };

    handleBackButtonClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        this.props.onChangePage(event, this.props.page - 1);
    };

    handleNextButtonClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        this.props.onChangePage(event, this.props.page + 1);
    };

    handleLastPageButtonClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        this.props.onChangePage(
            event,
            Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1)
        );
    };

    render() {
        const { classes, count, rowsPerPage, page } = this.props;

        return (
            <div className={classes ? classes.root : ""}>
                <IconButton
                    onClick={this.handleFirstPageButtonClick}
                    disabled={page === 0}
                    aria-label="First Page"
                >
                    <FirstPageIcon />
                </IconButton>
                <IconButton
                    onClick={this.handleBackButtonClick}
                    disabled={page === 0}
                    aria-label="Previous Page"
                >
                    <KeyboardArrowLeftIcon />
                </IconButton>
                <IconButton
                    onClick={this.handleNextButtonClick}
                    disabled={((page + 1) * rowsPerPage) >= count}
                    aria-label="Next Page"
                >
                    <KeyboardArrowRightIcon />
                </IconButton>
                <IconButton
                    onClick={this.handleLastPageButtonClick}
                    disabled={((page + 1) * rowsPerPage) >= count}
                    aria-label="Last Page"
                >
                    <LastPageIcon />
                </IconButton>
            </div>
        );
    }
}

const CompanyTableActions = withStyles(actionsStyles, { withTheme: true })(
    CompanyTableActionsComponent
);

export { CompanyTableActions };