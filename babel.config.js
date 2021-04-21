module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          controllers: './src/controllers',
          queries: './src/queries',
          routes: './src/routes',
          utils: './src/utils',
          config: './config',
          services: './src/services',
          tests: './src/tests',
          validations: './src/validations',
        },
      },
    ],
  ],
};
