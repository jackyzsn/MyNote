const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const config = {
  transformer: {
    // Ensure we use terser and do NOT mangle property names
    minifierPath: require.resolve('metro-minify-terser'),
    minifierConfig: {
      keep_classnames: true,
      keep_fnames: true,
      mangle: {
        properties: false, // <-- critical
      },
      output: {
        comments: false,
        ascii_only: true,
      },
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);