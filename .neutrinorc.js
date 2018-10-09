module.exports = {
  use: [
    ['neutrino-preset-mozilla-frontend-infra/node', {
      hot: false,
      babel: {
        plugins: [
          require.resolve('@babel/plugin-proposal-object-rest-spread'),
        ],
      },
      eslint: {
        rules: {
          'no-nested-ternary': 0,
        },
      },
    }],
    // replace start-server with restart-server
    (neutrino) => {
      neutrino.config.when(process.env.NODE_ENV === 'development', config => {
        config.plugins.delete('start-server');
        neutrino.use(['neutrino-middleware-restart-server', {
          name: 'index.js',
        }]);
      });
    },
    (neutrino) => {
      neutrino.config.module
        .rule('graphql')
          .test(/\.graphql$/)
          .use('raw')
            .loader(require.resolve('raw-loader'));
    },
    // work around https://bugzilla.mozilla.org/show_bug.cgi?id=1489273
    (neutrino) => {
      neutrino.config.when(process.env.NODE_ENV === 'production', config => {
        config.plugins.delete('named-chunks');
      });
    },
    '@neutrinojs/mocha'
  ],
};
