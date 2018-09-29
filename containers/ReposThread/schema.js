import gql from 'graphql-tag'

const pagedReposRaw = `
  query($filter: PagedArticleFilter) {
    pagedRepos(filter: $filter) {
      entries {
        id
        title
        ownerName
        desc

        license
        releaseTag
        contributors {
          avatar
          htmlUrl
          nickname
        }
        starCount
        forkCount
        primaryLanguage {
          name
          color
        }
        views
        author {
          id
          avatar
          nickname
        }
        insertedAt
      }
      totalCount
      pageSize
      pageNumber
    }
  }
`
// TODO: mvoe to SharedSchema
const partialTagsRaw = `
  query($communityId: ID, $community: String, $thread: CmsThread!) {
    partialTags(communityId: $communityId, community: $community, thread: $thread) {
      id
      title
      color
      thread
    }
  }
`

const pagedRepos = gql`
  ${pagedReposRaw}
`
const partialTags = gql`
  ${partialTagsRaw}
`

const schema = {
  pagedRepos,
  pagedReposRaw,
  partialTags,
  partialTagsRaw,
}

export default schema
