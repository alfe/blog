/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'cdn-ak.f.st-hatena.com',
      'cdn-ak2.f.st-hatena.com',
      'lh3.googleusercontent.com',
      'blog.alfebelow.com',
      'opengraph.githubassets.com',
      'localhost',
    ],
  },
  async redirects() {
    return [{
      source: '/entry2023/:path*',
      destination: '/entry/2023/:path*',
      permanent: true,
    }, {
      source: '/entry/2018/11/03/CODE_BLUE_2018_レポ_',
      destination: '/entry/2018/11/03/CODE_BLUE_2018',
      permanent: true,
    }, {
      source: '/entry/おいしいコーヒーの入れ方',
      destination: '/entry/2015/01/30/おいしいコーヒーの入れ方',
      permanent: true,
    }, {
      source: '/entry/2017_winter_anime',
      destination: '/entry/2017/01/28/2017_winter_anime',
      permanent: true,
    }, {
      source: '/entry/202004-book',
      destination: '/entry/2020/05/01/202004-book',
      permanent: true,
    }, {
      source: '/entry/2017_winter_anime',
      destination: '/entry/2017/01/28/2017_winter_anime',
      permanent: true,
    }, {
      source: '/entry/HP-RX700_HP-A900X',
      destination: '/entry/2015/06/28/HP-RX700_HP-A900X',
      permanent: true,
    }, {
      source: '/entry/IZF-31K',
      destination: '/entry/2015/05/07/IZF-31K',
      permanent: true,
    }, {
      source: '/entry/Pushbullet_with_ChromeDesktop',
      destination: '/entry/2015/02/05/Pushbullet_with_ChromeDesktop',
      permanent: true,
    }, {
      source: '/entry/streetview%2Bmilkcocoa',
      destination: '/entry/2015/01/27/streetview%2Bmilkcocoa',
      permanent: true,
    }, {
      source: '/entry/hutineko',
      destination: '/entry/2017/02/04/hutineko',
      permanent: true,
    }, {
      source: '/entry/kemono_free_agent_nation',
      destination: '/entry/2017/02/12/kemono_free_agent_nation',
      permanent: true,
    }, {
      source: '/entry/LINE_PC',
      destination: '/entry/2016/12/01/LINE_PC',
      permanent: true,
    }, {
      source: '/entry/oyayubi_keyboard_eee_life',
      destination: '/entry/2016/11/12/oyayubi_keyboard_eee_life',
      permanent: true,
    }, {
      source: '/entry/windows10flux',
      destination: '/entry/2017/06/13/windows10flux',
      permanent: true,
    }, {
      source: '/entry/Melamine_Sponge',
      destination: '/entry/2017/01/29/Melamine_Sponge',
      permanent: true,
    }, {
      source: '/entry/obs-discord-icon',
      destination: '/entry/2022/03/20/obs-discord-icon',
      permanent: true,
    }]
  },
}

module.exports = nextConfig
