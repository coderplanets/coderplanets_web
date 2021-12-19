import { types as T } from 'mobx-state-tree'

export { Community, PagedCommunities } from './Community'
export { default as Article } from './Article'
export { Comment, PagedComments } from './Comment'
export { Post, PagedPosts } from './Post'
export { Blog, PagedBlogs, BlogRSSInfo } from './Blog'
export { Radar, PagedRadars } from './Radar'
export { Works, PagedWorks, SocialInfo } from './Works'
export { Meetup, PagedMeetups } from './Meetup'
export { Repo, PagedRepos } from './Repo'
export { Job, PagedJobs } from './Job'
export { Tag, PagedTags, emptyTag } from './Tag'
export { Category, PagedCategories } from './Category'
export { FavoriteCategory, PagedFavoriteCategories } from './FavoriteCategory'

export { GithubUser } from './GithubUser'
export { emptyPagi } from './helper/common'

export {
  EmptyUser,
  EmptyAchievement,
  User,
  PagedUsers,
  SimpleUser,
} from './User'

export { ArticlesFilter } from './ArticlesFilter'

export { MailStatus, MentionMsg, PagedMentionMessages } from './Mail'

export const Mention = T.model('Mention', {
  id: T.string,
  name: T.string,
  avatar: T.string,
})

export { articleFields, Document } from './helper/article'
