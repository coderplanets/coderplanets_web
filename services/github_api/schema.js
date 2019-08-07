// import gql from 'graphql-tag'

const user = `
  query($login: String!) {
    user(login: $login) {
      id
      login
      bio
      avatarUrl
      location
      company
      url
    }
  }
`

const repository = `
  query($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      name
      description
      url
      licenseInfo {
        key
      }
      forkCount
      stargazers {
        totalCount
      }
      watchers {
        totalCount
      }
      issues(states: OPEN) {
        totalCount
      }
      pullRequests(states: OPEN) {
        totalCount
      }
      homepageUrl
      owner {
        login
        url
      }
      primaryLanguage {
        name
        color
      }
      releases(last: 1) {
        nodes {
          name
          tag {
            name
          }
        }
      }
    }
  }
`

const schema = {
  user,
  repository,
}

export default schema
