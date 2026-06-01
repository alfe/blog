/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://example.com',
  generateRobotsTxt: true, // (optional)
  exclude: ['/archive/*'],
  // output: 'export' の出力先に合わせて sitemap / robots.txt も out/ に書き出す
  outDir: 'out',
}
