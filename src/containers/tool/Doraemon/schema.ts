import { gql } from '@urql/core'
import { F } from '@/schemas'

const githubSignin = gql`
  mutation ($code: String!) {
    githubSignin(code: $code) {
      token
      user {
        id
        avatar
        nickname
        bio
        fromGithub
      }
    }
  }
`
const searchCommunities = gql`
  query($title: String!) {
    searchCommunities(title: $title) {
      entries {
        ${F.community}
      }
      totalCount
    }
  }
`
const searchUsers = gql`
  query($name: String!) {
    searchUsers(name: $name) {
      entries {
        ${F.author}
      }
      totalCount
    }
  }
`
const searchPosts = gql`
  query($title: String!) {
    searchPosts(title: $title) {
      entries {
        author {
          ${F.author}
        }
        commentsCount
        id
        title
        digest
        views
      }
      totalCount
    }
  }
`
const searchJobs = gql`
  query ($title: String!) {
    searchJobs(title: $title) {
      entries {
        id
        title
        digest
        salary
        companyLogo
        company
        views
      }
      totalCount
    }
  }
`
const searchRepos = gql`
  query ($title: String!) {
    searchRepos(title: $title) {
      entries {
        id
        ownerName
        title
        desc
        starCount
      }
      totalCount
    }
  }
`

const schema = {
  githubSignin,
  searchCommunities,
  searchUsers,
  searchPosts,
  searchJobs,
  searchRepos,
}

export default schema
