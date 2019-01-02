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

export const updateFields = [
  'nickname',
  'email',
  'location',
  'bio',
  'sex',
  // social
  'qq',
  'weibo',
  'weichat',
  'github',
  'zhihu',
  'douban',
  'twitter',
  'facebook',
  'dribble',
  'instagram',
  'pinterest',
  'huaban',
  // backgrounds
  'workBackgrounds',
  'educationBackgrounds',
]

export const S = {
  updateProfile,
}
