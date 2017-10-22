const fakeMenuItems = [
  {
    id: 1,
    name: 'intro',
    target: {
      href: {
        pathname: '/intro',
        query: { name: 'index' },
      },
      as: {
        pathname: '/intro/i',
      },
    },
  },
  {
    id: 2,
    name: 'feature',
    target: {
      href: {
        pathname: '/intro',
        query: { name: 'feature' },
      },
      as: {
        pathname: '/intro/feature',
      },
    },
  },

  {
    id: 3,
    name: 'theme',
    target: {
      href: {
        pathname: '/intro',
        query: { name: 'theme' },
      },
      as: {
        pathname: '/intro/theme',
      },
    },
  },

  {
    id: 4,
    name: 'i18n',
    target: {
      href: {
        pathname: '/intro',
        query: { name: 'i18n' },
      },
      as: {
        pathname: '/intro/i18n',
      },
    },
  },

  {
    id: 5,
    name: 'example',
    target: {
      href: {
        pathname: '/intro',
        query: { name: 'example' },
      },
      as: {
        pathname: '/intro/example',
      },
    },
  },
  {
    id: 6,
    name: 'cmdpanel',
    target: {
      href: {
        pathname: '/intro',
        query: { name: 'cmdpanel' },
      },
      as: {
        pathname: '/intro/cmdpanel',
      },
    },
  },
  {
    id: 7,
    name: 'graphql',
    target: {
      href: {
        pathname: '/intro',
        query: { name: 'graphql' },
      },
      as: {
        pathname: '/intro/graphql',
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
