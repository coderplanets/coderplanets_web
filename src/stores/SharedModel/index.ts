import { types as T } from 'mobx-state-tree'

export { Community, PagedCommunities } from './Community'
export { default as Article } from './Article'
export {
  Comment,
  PagedComments,
  PagedPostComments,
  PagedJobComments,
  PagedVideoComments,
  PagedRepoComments,
} from './Comment'
export { Post, PagedPosts } from './Post'
export { Video, PagedVideos } from './Video'
export { Repo, PagedRepos } from './Repo'
export { Job, PagedJobs } from './Job'
export { Tag, PagedTags } from './Tag'
export { Category, PagedCategories } from './Category'
export { FavoriteCategory, PagedFavoriteCategories } from './FavoriteCategory'

export { GithubUser } from './GithubUser'
export { default as Wiki } from './Wiki'
export { default as Cheatsheet } from './Cheatsheet'

export {
  EmptyUser,
  EmptyAchievement,
  User,
  PagedUsers,
  SimpleUser,
  EduBackground,
  WorkBackground,
} from './User'

export { ContentFilter } from './ContentFilter'

export { MailStatus, MentionMsg, PagedMentionMessages } from './Mail'

export const emptyPagiData = {
  entries: [],
  pageNumber: 1,
  pageSize: 20,
  totalCount: 0,
  totalPages: 0,
}

export const Mention = T.model('Mention', {
  id: T.string,
  name: T.string,
  avatar: T.string,
})
