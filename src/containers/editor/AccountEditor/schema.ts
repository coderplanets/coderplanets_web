import { gql } from '@urql/core'

const updateProfile = gql`
  mutation(
    $profile: UserProfileInput!
    $social: SocialInput
    $educationBackgrounds: [EduBackgroundInput]
    $workBackgrounds: [WorkBackgroundInput]
  ) {
    updateProfile(
      profile: $profile
      social: $social
      educationBackgrounds: $educationBackgrounds
      workBackgrounds: $workBackgrounds
    ) {
      id
    }
  }
`

export const updateFields = [
  'nickname',
  'email',
  'location',
  'bio',
  'sex',
  // social
  'social',
  // backgrounds
  'workBackgrounds',
  'educationBackgrounds',
]

export const S = {
  updateProfile,
}
