interface NavBarMenu {
  url: string;
  title: string;
  icon?: string;
}[];

export const NON_AUTH_MENU: NavBarMenu[] = [
  {
    url: '',
    title: 'Home',
    icon: 'home'
  },
];
