const fakeMenuItems = [
  {
    id: 1,
    name: 'home',
    target: {
      href: {
        pathname: '/',
        query: { name: 'index' },
      },
      as: {
        pathname: '/home/i',
      },
    },
  },
  {
    id: 2,
    name: 'feature',
    target: {
      href: {
        pathname: '/',
        query: { name: 'feature' },
      },
      as: {
        pathname: '/home/feature',
      },
    },
  },

  {
    id: 3,
    name: 'theme',
    target: {
      href: {
        pathname: '/',
        query: { name: 'theme' },
      },
      as: {
        pathname: '/home/theme',
      },
    },
  },

  {
    id: 4,
    name: 'i18n',
    target: {
      href: {
        pathname: '/',
        query: { name: 'i18n' },
      },
      as: {
        pathname: '/home/i18n',
      },
    },
  },

  {
    id: 5,
    name: 'example',
    target: {
      href: {
        pathname: '/',
        query: { name: 'example' },
      },
      as: {
        pathname: '/home/example',
      },
    },
  },
]

export default fakeMenuItems

/*
const href = {
  pathname: '/',
  query: { name: 'feature' },
}

const as = {
  pathname: '/home/feature',
  hash: 'feature-1',
}
*/
