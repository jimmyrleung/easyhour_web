import { ReactNode } from "react";
import { Theme } from "@material-ui/core";
import { CompanyFormModel } from "../models";

export interface ICompanyForm {
    children?: ReactNode;
    theme?: Theme;
    classes?: any;
    formData: CompanyFormModel;
    setCompanyForm?(cf: CompanyFormModel): void;
};