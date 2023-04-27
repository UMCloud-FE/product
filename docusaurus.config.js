// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '优铭云 - 产品文档中心',
  // tagline: 'dd',
  favicon: 'https://umweb-static.cn-sh2.ufileos.com/docs/images/favicon.ico',
  url: 'https://docs.umpaas.com',
  baseUrl: '/product/',
  staticDirectories: ['static'],
  organizationName: 'UMCloud', // Usually your GitHub org/user name.
  projectName: 'product', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans']
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/UMCloud-FE/product/blob/main/docs',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'https://umweb-static.cn-sh2.ufileos.com/web/images/logo-reverse.png?auto=format&fit=max&w=256',
      navbar: {
        title: '',
        logo: {
          alt: 'UMCloud',
          src: 'https://umweb-static.cn-sh2.ufileos.com/web/images/logo-reverse.png?auto=format&fit=max&w=256',
        },
        items: [
          { 
            type: 'docSidebar', 
            sidebarId: 'usms',
            position: 'left',
            label: '短信服务',
          },
          { 
            type: 'docSidebar', 
            sidebarId: 'isms',
            position: 'left',
            label: '视频短信',
          },
          { 
            type: 'docSidebar', 
            sidebarId: 'uaim',
            position: 'left',
            label: '智能短信',
          },
          {
            href: 'https://console.umpaas.com/',
            label: '回到官网',
            position: 'right',
          },
          {
            href: 'https://github.com/UMCloud-FE/product',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © All Rights Reserved 上海优铭云计算有限公司 | 沪ICP备2022034633号-1`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      giscus: {
        repo: 'UMCloud-FE/product',
        repoId: 'R_kgDOJJSraw',
        category: 'Announcements',
        categoryId: 'DIC_kwDOJJSra84CU3Cd',
        lang: "zh-CN"
      },
    }),
    clientModules: [require.resolve('./src/clientModules/routeModules.js')],
    onBrokenLinks: 'ignore',
    stylesheets: [
      {
        href: '/custom.css',
        type: 'text/css'
      }
    ]
};

module.exports = config;
