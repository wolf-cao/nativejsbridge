module.exports = {
  sourceMaps: true,
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          android: '4',
          ios: '9'
        },
        useBuiltIns: 'usage',
        debug: true
      }
    ]
  ],
  ignore: ['node_modules']
}
