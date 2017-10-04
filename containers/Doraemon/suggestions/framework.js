/*
*
* frameworks
*
*/

const frameworkMeta = {
  type: 'framework',
  children: {
    users: {},
    maps: {},
    video: {},
    github: {},
    meetups: {},
  },
}

const frameworks = {
  React: { ...frameworkMeta, parent: 'javascript' },
  Django: { ...frameworkMeta, parent: 'python' },
  Phoenix: { ...frameworkMeta, parent: 'elixir' },
  Docker: { ...frameworkMeta, parent: 'go' },
}

export default frameworks
