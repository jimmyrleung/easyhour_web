import { ReactNode } from "react";
import { Theme } from "@material-ui/core";

export interface ICompanyTable {
    children?: ReactNode;
    theme?: Theme;
    classes?: any;
};