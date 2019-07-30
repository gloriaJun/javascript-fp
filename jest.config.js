module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  // testRegex: '\\.test\\.ts$',
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  testMatch: [
    '<rootDir>/**/*.(spec|test).[jt]s?(x)',
    '<rootDir>/tests/**/*.(spec|test).[jt]s?(x)',
  ],
  // setupFiles: ['<rootDir>/tests/unit/testSetup.js'],
  // setupFilesAfterEnv: ['react-testing-library/cleanup-after-each'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  moduleFileExtensions: ['ts', 'js', 'json'],
  globals: {
    'ts-jest': {
      // failed when occurred compile error (default: false)
      enableTsDiagnostics: true,
    },
  },
};
