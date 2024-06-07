const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? '/nhom8plusgen1/' : '',
  basePath: isProd ? '/nhom8plusgen1' : '',
};
