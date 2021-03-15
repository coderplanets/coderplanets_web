// import F from '../fragments'

const cheatsheet = `
  query($community: String!) {
    cheatsheet(community: $community) {
      id
      views
      readme
      lastSync
      contributors {
        avatar
        nickname
        htmlUrl
        bio
        location
        company
      }
    }
  }
`

export default cheatsheet
