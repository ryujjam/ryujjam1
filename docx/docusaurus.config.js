// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Noox Dox',
  tagline: 'Your all-in-one resources for Noox',
  url: 'https://ryujjam.github.io',
  baseUrl: '/ryujjam1/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: './static/img/favicon.ico',
  organizationName: 'ryujjam', // Usually your GitHub org/user name.
  projectName: 'ryujjam1', // Usually your repo name.
  // customFields: {
  //   defaultDocsLandingPage: 'docs/intro',
  // },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
            // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Noox Docs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/nlogo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Learn',
          },
          // {
          //   type: 'doc',
          //   docId: 'faqs/faq',
          //   position: 'left',
          //   label: 'Guides',
          // },
          {
            type: 'doc',
            docId: 'devs/contracts',
            position: 'left',
            label: 'Devs',
          },
          {
            type: 'doc',
            docId: 'faqs/faq',
            position: 'left',
            label: 'FAQ',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Learn',
                to: '/',
              },
              {
                label: 'Devs',
                to: 'devs/contracts',
              },
              {
                label: 'FAQ',
                to: 'faqs/faq',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/noox',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/noox_world',
              },
              {
                label: 'Discourse',
                href: 'https://discuss.noox.world/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://mirror.xyz/noox.eth',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/nooxprotocol',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Noox Docs.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;