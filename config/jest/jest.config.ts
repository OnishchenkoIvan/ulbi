export default {
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/'],
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  rootDir: '../../',
  testMatch: ['<rootDir>/src/**/*(*.)@(spec|test).[tj]s?(x)'],
};
