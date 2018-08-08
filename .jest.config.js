module.exports = {
  setupFiles: ['<rootDir>/.jest.setup.js'],
  coverageDirectory: './coverage/',
  testURL: 'http://localhost/',
  collectCoverage: true,
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/cypress',
  ],
}
