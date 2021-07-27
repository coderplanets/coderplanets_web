import gql from 'graphql-tag'

const favoriteCategories = gql`
  query($userId: ID, $filter: CommonPagedFilter!) {
    favoriteCategories(userId: $userId, filter: $filter) {
      entries {
        id
        title
        desc
        totalCount
        private
        updatedAt
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
const deleteFavoriteCategory = gql`
  mutation($id: ID!) {
    deleteFavoriteCategory(id: $id) {
      done
    }
  }
`

const setFavorites = gql`
  mutation($id: ID!, $thread: CmsThread, $categoryId: ID!) {
    setFavorites(id: $id, thread: $thread, categoryId: $categoryId) {
      id
      totalCount
    }
  }
`

const unsetFavorites = gql`
  mutation($id: ID!, $thread: CmsThread, $categoryId: ID!) {
    unsetFavorites(id: $id, thread: $thread, categoryId: $categoryId) {
      id
      totalCount
    }
  }
`

const schema = {
  favoriteCategories,
  createFavoriteCategory,
  updateFavoriteCategory,
  deleteFavoriteCategory,
  setFavorites,
  unsetFavorites,
}

export default schema
