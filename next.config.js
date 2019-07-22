const path = require('path');
const withImages = require('next-images');

module.exports = withImages({
  webpack(config) {
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  }
});
