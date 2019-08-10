const wiki = `
  query($community: String!) {
    wiki(community: $community) {
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

export default wiki
