const {alias} = require('react-app-rewire-alias');

module.exports = function override(config) {
    alias({
        '@components': 'src/components',
        '@utils': 'src/utils',
        '@context': 'src/context',
        '@hooks': 'src/hooks',
        '@theme': 'src/theme',
        '@images': 'src/assets/images',
        '@gifs': 'src/assets/gifs',
    })(config);

    return config;
};