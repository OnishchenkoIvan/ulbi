const path = require('path');

module.exports = {
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/'],
  rootDir: '../../',
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  modulePaths: ['<rootDir>src'],
  testMatch: ['<rootDir>/src/**/*(*.)@(spec|test).[tj]s?(x)'],
  moduleNameMapper: {
    '\\.s?css$': 'identity-obj-proxy',
    '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
  },
  setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
};
