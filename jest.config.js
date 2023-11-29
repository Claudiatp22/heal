module.exports = {
  fakeTimers: {
    enableGlobally: true,
  },
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|react-native-vector-icons|react-native-safe-area-context)/)',
  ],
};
