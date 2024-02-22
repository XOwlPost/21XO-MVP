module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/components/__tests__/.ipynb_checkpoints/' // Explicitly ignore .ipynb_checkpoints
  ],
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
};

