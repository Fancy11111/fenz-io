const basePath = process.env.NODE_ENV == 'production' ? '' : ''

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  basePath,
  assetPrefix: `${basePath}/`
}