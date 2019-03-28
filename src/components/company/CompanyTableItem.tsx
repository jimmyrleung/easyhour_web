import React from 'react';
import { TableRow, TableCell, IconButton } from "@material-ui/core";
import {
    Edit as EditIcon
    , Delete as DeleteIcon
} from '@material-ui/icons';

import { ICompanyModel } from './interfaces';

interface ICompanyTableItemProps {
    item: ICompanyModel;
}

export const CompanyTableItem = ({ item }: ICompanyTableItemProps) => {
    return (
        <TableRow key={item.id}>
            <TableCell component="th" scope="row">
                {item.companyName}
            </TableCell>
            <TableCell>{item.tradingName}</TableCell>
            <TableCell>{item.registerNumber}</TableCell>
            <TableCell>{item.zipcode}</TableCell>
            <TableCell align="right">
                <IconButton
                    color="inherit"
                    aria-label="Edit"
                >
                    <EditIcon />
                </IconButton>
                <IconButton
                    color="inherit"
                    aria-label="Delete"
                >
                    <DeleteIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    )
}