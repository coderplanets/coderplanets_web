module.exports = {
  setupFiles: ['<rootDir>/.jest.setup.js'],
  coverageDirectory: './coverage/',
  collectCoverage: true,
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/cypress',
  ],
}
