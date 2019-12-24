import { UiLayout } from '@kikstart/ui';

export const appLayout: UiLayout = {
  brand: {
    logo: 'assets/logo.svg',
    name: 'kikstart',
    product: 'scully-starter',
    separator: '|',
    description: 'Scully starter with @kikstart/ui',
  },
  header: {
    style: 'dark',
    links: [
      { path: '/', label: 'Home', icon: 'mr-2 fa fa-fw fa-home' },
      { url: 'https://github.com/beeman/scully-starter', label: 'GitHub', icon: 'mr-2 fa fa-fw fa-github' },
    ],
  },
  footer: {
    html: `Copyright <a href="">kikstart.dev</a> 2019.`,
    links: [
      { url: 'https://github.com/beeman', label: '', icon: 'fa fa-fw fa-2x fa-github' },
      { url: 'https://twitter.com/beeman_nl', label: '', icon: 'fa fa-fw fa-2x fa-twitter' },
    ],
  },
};
