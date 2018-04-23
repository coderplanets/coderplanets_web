import gql from 'graphql-tag'

const updateProfile = gql`
  mutation($profile: UserProfileInput!) {
    updateProfile(profile: $profile) {
      id
    }
  }
`

const schema = {
  updateProfile,
}

export default schema
