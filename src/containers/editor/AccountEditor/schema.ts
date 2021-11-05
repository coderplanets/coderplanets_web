import { gql } from '@urql/core'

const user = gql`
  query ($login: String!) {
    user(login: $login) {
      login
      avatar
      nickname
      bio
      shortbio
      email
      location
      sex
      fromGithub
      social {
        github
        blog
        company
        twitter
      }
    }
  }
`

const updateProfile = gql`
  mutation ($profile: UserProfileInput!, $social: SocialInput) {
    updateProfile(profile: $profile, social: $social) {
      id
    }
  }
`

const schema = {
  updateProfile,
  user,
}

export default schema
