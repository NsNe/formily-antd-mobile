export default {
  esm: 'rollup',
  cjs: 'rollup',
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
  ]
};
