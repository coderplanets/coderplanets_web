// Cache strategies
// By default next-offline will precache all the Next.js webpack emitted files and the user-defined static ones (inside /static)
// see more: https://github.com/hanford/next-offline

module.exports = {
  workboxOpts: {
    runtimeCaching: [
      {
        urlPattern: /\.(?:png|gif|jpg|jpeg|svg)$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'images',
          expiration: {
            maxAgeSeconds: 7 * 24 * 60 * 60, // 7 Days
          },
        },
      },
      {
        urlPattern: /\.(?:css)$/,
        handler: 'StaleWhileRevalidate',
      },
      {
        // github avatars
        urlPattern: /^https:\/\/avatars2\.githubusercontent\.com/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'github-images',
          expiration: {
            maxAgeSeconds: 7 * 24 * 60 * 60, // 7 Days
          },
        },
      },
      {
        // google fonts
        urlPattern: /^https:\/\/fonts\.googleapis\.com/,
        handler: 'CacheFirst',
      },
      {
        // google fonts
        urlPattern: /^https:\/\/fonts\.gstatic\.com/,
        handler: 'CacheFirst',
      },
      {
        // staticfile cdn
        urlPattern: /^https:\/\/cdn\.staticfile\.org/,
        handler: 'CacheFirst',
      },
      {
        // antd fonts
        urlPattern: /^https:\/\/at\.alicdn\.com/,
        handler: 'CacheFirst',
      },
      {
        // ali cdn
        urlPattern: /^https:\/\/gosspublic\.alicdn\.com/,
        handler: 'CacheFirst',
      },
      {
        // ali cdn
        urlPattern: /^https:\/\/a\.alipayobjects\.com/,
        handler: 'CacheFirst',
      },
    ],
  },
}
