import gql from 'graphql-tag'

const listFavoriteCategories = gql`
  query($userId: ID, $filter: CommonPagedFilter!) {
    listFavoriteCategories(userId: $userId, filter: $filter) {
      entries {
        id
        title
        desc
        totalCount
        private
      }
      totalPages
      totalCount
      pageSize
      pageNumber
    }
  }
`

const createFavoriteCategory = gql`
  mutation($title: String!, $desc: String, $private: Boolean) {
    createFavoriteCategory(title: $title, desc: $desc, private: $private) {
      id
      title
    }
  }
`
const updateFavoriteCategory = gql`
  mutation($id: ID!, $title: String, $desc: String, $private: Boolean) {
    updateFavoriteCategory(
      id: $id
      title: $title
      desc: $desc
      private: $private
    ) {
      id
      title
      desc
      private
    }
  }
`

const setFavorites = gql`
  mutation($id: ID!, $thread: CmsThread, $categoryId: ID!) {
    setFavorites(id: $id, thread: $thread, categoryId: $categoryId) {
      id
      title
      totalCount
    }
  }
`

const unsetFavorites = gql`
  mutation($id: ID!, $thread: CmsThread, $categoryId: ID!) {
    unsetFavorites(id: $id, thread: $thread, categoryId: $categoryId) {
      id
      title
      totalCount
    }
  }
`

const schema = {
  listFavoriteCategories,
  createFavoriteCategory,
  updateFavoriteCategory,
  setFavorites,
  unsetFavorites,
}

export default schema
