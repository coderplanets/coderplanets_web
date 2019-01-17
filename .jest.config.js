module.exports = {
  setupFiles: ['<rootDir>/.jest.setup.js'],
  coverageDirectory: './coverage/',
  testURL: 'http://localhost/',
  collectCoverage: true,
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/cypress',
  ],
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.js$': 'babel-jest',
  },
}
