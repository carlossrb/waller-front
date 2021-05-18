module.exports = {
  preset: 'ts-jest',
  clearMocks: true,
  coverageDirectory: '.coverage',
  testPathIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '^~(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sss|styl)$': 'identity-obj-proxy',
    '^.+\\.(svg|woff|woff2|png|jpg)$': '<rootDir>/file-transformer.js',
  },
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
