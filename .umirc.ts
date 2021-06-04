import { defineConfig } from "dumi";

const pkg = require('./package.json');

export default defineConfig({
  mode: 'site',
  title: 'formily antd mobile',
  dynamicImport: {},
  hash: true,
  outputPath: 'docs-dist',
  navs: [null, { title: 'GitHub', path: 'https://github.com/NsNe/formily-antd-mobile' }],
  publicPath: `/${pkg.name}/`,
  base: `/${pkg.name}/`,
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'lodash',
        libraryDirectory: '',
        camel2DashComponentName: false
      },
      'lodash'
    ],
  ],
  themeConfig: {
    hd: {
      rules: [
        { minWidth: 415, maxWidth: 750, mode: 'vw', options: [100, 750] },
      ],
    }
  },

  // more config: https://d.umijs.org/config
});

