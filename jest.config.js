/** @typedef {import('ts-jest')} */
/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>/tests/'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'd.ts', 'tsx', 'node'],
  testPathIgnorePatterns: ['dist/'],
  globals: {
    'ts-jest': {
      diagnostics: {
        // Do not fail on TS compilation errors
        // https://kulshekhar.github.io/ts-jest/user/config/diagnostics#do-not-fail-on-first-error
        warnOnly: true,
      },
    },
  },
};
