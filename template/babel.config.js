module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@': './app',
          '@config': './config',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
