// metro.config.js
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);

  // safe extract (struktur bisa berbeda antar versi metro)
  const resolver = defaultConfig.resolver || {};
  const assetExts = resolver.assetExts || [];
  const sourceExts = resolver.sourceExts || [];

  const config = {
    transformer: {
      // gunakan yang biasa dipakai oleh svg transformer
      babelTransformerPath: require.resolve(
        'react-native-svg-transformer/react-native',
      ),
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      // tambahkan ext yang diperlukan termasuk ts/tsx
      sourceExts: [
        ...new Set([...sourceExts, 'ts', 'tsx', 'js', 'jsx', 'svg']),
      ],
    },
  };

  return mergeConfig(defaultConfig, config);
})();
