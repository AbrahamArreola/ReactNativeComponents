import { RouteStackParams } from '../navigation/Navigation';

export interface IMenuItem {
    name: string;
    icon: string;
    component: keyof RouteStackParams;
}

export const menuItems: IMenuItem[] = [
    {
        name: 'Animation 101',
        icon: 'cube-outline',
        component: 'Animation101Screen',
    },
    {
        name: 'Animation 102',
        icon: 'albums-outline',
        component: 'Animation102Screen',
    },
    {
        name: 'Switches',
        icon: 'toggle-outline',
        component: 'SwitchScreen',
    },
];
