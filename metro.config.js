const { getDefaultConfig } = require("metro-config");

// React Native SVG
module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts }
  } = await getDefaultConfig(__dirname);

  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer")
    },
    resolver: {
      assetExts: [...assetExts.filter(ext => ext !== 'svg'), 'bin'],
      sourceExts: [...sourceExts, 'svg']
    }
  };
})();

// React Native SVG
// module.exports = (async () => {
//   const {
//     resolver: { sourceExts, assetExts }
//   } = await getDefaultConfig();
//   return {
//     transformer: {
//       babelTransformerPath: require.resolve("react-native-svg-transformer")
//     },
//     resolver: {
//       assetExts: assetExts.filter(ext => ext !== "svg"),
//       sourceExts: [...sourceExts, "svg"]
//     }
//   };
// })();

// React Native Tensorflow
// module.exports = (async () => {
//   const defaultConfig = await getDefaultConfig();
//   const { assetExts } = defaultConfig.resolver;
//   return {
//     resolver: {
//       assetExts: [...assetExts, 'bin'],
//     }
//   };
// })()