import F from '../fragments'

export const mentions = `
  query($filter: MessagesFilter!) {
    mentions(filter: $filter) {
      entries {
        id
        fromUser {
          ${F.author}
          id
          avatar
          nickname
        }
        sourceId
        sourceTitle
        sourcePreview
        sourceType
        parentId
        parentType
        floor
        community
        read
      }
      ${F.pagi}
    }
  }
`

export const holder = 1
