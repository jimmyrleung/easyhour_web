import { ReactNode } from 'react';
import { Theme } from '@material-ui/core/styles';

export interface ICompanyTableHeader {
    children?: ReactNode;
    theme?: Theme;
    classes?: any;
};