import gql from 'graphql-tag'

const updateProfile = gql`
  mutation(
    $profile: UserProfileInput!
    $educationBackgrounds: [EduBackgroundInput]
    $workBackgrounds: [WorkBackgroundInput]
  ) {
    updateProfile(
      profile: $profile
      educationBackgrounds: $educationBackgrounds
      workBackgrounds: $workBackgrounds
    ) {
      id
    }
  }
`

const schema = {
  updateProfile,
}

export default schema
