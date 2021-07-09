import { defineConfig } from 'dumi';

const repo = 'duxravel-doc';

export default defineConfig({
  title: 'Duxravel',
  favicon: '/images/logo.png',
  logo: '/images/logo.svg',
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  // Because of using GitHub Pages
  base: `/`,
  publicPath: `/`,
  navs: [
    null,
    {
      title: '产品社区',
      path: 'https://support.qq.com/products/331847',
    },
    {
      title: 'GitHub',
      path: 'https://github.com/duxphp/CMSRavel',
    },
  ],
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  ],
  locales: [['zh-CN', '中文']],
  // more config: https://d.umijs.org/config
});
