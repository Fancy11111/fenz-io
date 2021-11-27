const basePath = process.env.NODE_ENV == 'production' ? '/fenz-io' : ''

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  basePath,
  assetPrefix: `${basePath}/`
}