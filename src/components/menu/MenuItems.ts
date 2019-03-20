import { SvgIconProps } from '@material-ui/core/SvgIcon';

import {
    Work as WorkIcon
    , PowerSettingsNew as PowerIcon
} from '@material-ui/icons';

interface IMenuItem {
    key: string;
    name: string;
    icon: React.ComponentType<SvgIconProps>;
};

const menuItemsBefore: IMenuItem[] = [{
    key: 'Company_Menu',
    name: 'Company',
    icon: WorkIcon
}];

const menuItemsAfter: IMenuItem[] = [{
    key: 'Logout_Menu',
    name: 'Logout',
    icon: PowerIcon
}];

export default {
    after: menuItemsAfter,
    before: menuItemsBefore
};