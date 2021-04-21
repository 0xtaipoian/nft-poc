/* eslint-disable global-require, @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa');
const withPlugins = require('next-compose-plugins');
const runtimeCaching = require('next-pwa/cache');
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

const NODE_ENV = process.env.NODE_ENV || 'development';
const isDev = NODE_ENV === 'development';

const nextConfig = {
  poweredByHeader: false,
  env: {
    DEBUG: isDev ? 'web:*' : undefined,
  },
};

module.exports = withPlugins(
  [
    [
      withPWA,
      {
        pwa: {
          dest: 'public',
          runtimeCaching,
        },
      },
    ],
  ],
  nextConfig
);
