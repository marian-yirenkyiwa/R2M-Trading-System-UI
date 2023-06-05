import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'My Dashboard',
  },
  {
    displayName: 'Dashboard',
    iconName: 'layout-dashboard',
    route: '/dashboard',
  },
  {
    navCap: 'Trade',
  },
  {
    displayName: 'New Order',
    iconName: 'coin',
    route: '/create-order',
  },
  {
    displayName: 'Order History',
    iconName: 'history',
    route: '/history',
  },
  {
    displayName: 'Cancel Order',
    iconName: 'coin-off',
    route: '/history',
  },
  // {
  //   displayName: 'Menu',
  //   iconName: 'layout-navbar-expand',
  //   route: '/ui-components/menu',
  // },
  // {
  //   displayName: 'Tooltips',
  //   iconName: 'tooltip',
  //   route: '/ui-components/tooltips',
  // },
  {
    navCap: 'Portfolio',
  },
  {
    displayName: 'New Portfolio',
    iconName: 'briefcase',
    route: '/portfolio',
  },
  {
    displayName: 'View all Portfolio',
    iconName: 'eye-check',
    route: '/portfolios',
  },
  {
    displayName: 'Close Portfolio',
    iconName: 'briefcase-off',
    route: '/portfolios',
  },
  // {
  //   navCap: 'Extra',
  // },
  // {
  //   displayName: 'Icons',
  //   iconName: 'mood-smile',
  //   route: '/extra/icons',
  // },
  // {
  //   displayName: 'Sample Page',
  //   iconName: 'aperture',
  //   route: '/extra/sample-page',
  // },
  {
    navCap: 'Logout',
  },
  {
    displayName: 'Logout',
    iconName: 'arrow-big-left',
    route: '/'
  }
];
