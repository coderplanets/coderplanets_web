export { default as GAWraper } from './GAWraper'
// Basic component
/*
 * NOTE: should import Img in absolute path
 * import { Img } from '..component' will cause next.js build error in production
 */
// export { default as Img } from './Img'

export { default as EmptyThread } from './EmptyThread'
export { default as ConstructingThread } from './ConstructingThread'
export { default as NotFound } from './NotFound'
export { default as Modal } from './Modal'
export { default as Popover } from './Popover'
export { default as Popconfirm } from './Popconfirm'
export { Space, SpaceGrow, Margin } from './BaseStyled'
// paged contents
export { default as PagedContents } from './PagedContents'
export { default as PostItem } from './PostItem'
export { default as JobItem } from './JobItem'
export { default as RepoItem } from './RepoItem'
export { default as VideoItem } from './VideoItem'

// Utils component
export { withGuardian } from './HOC'
export { default as MarkdownEditor } from './MarkdownEditor'
export { default as ArticleEditToolbar } from './ArticleEditToolbar'
export { default as ArticleEditFooter } from './ArticleEditFooter'

export { default as ContentBanner } from './ContentBanner'
export { default as Maybe } from './Maybe'
export { default as DotDivider } from './DotDivider'
export { default as PublishLabel } from './PublishLabel'
export { default as UserBrief } from './UserBrief'
export { default as ErrorPage } from './ErrorPage'
export { default as OauthHinter } from './OauthHinter'
export { default as MarkDownRender } from './MarkDownRender'
export { default as ContentFilter } from './ContentFilter'
export { default as FocusLine } from './FocusLine'
export { default as FormItem } from './FormItem'

export { default as StateTree } from './StateTree'
export { default as TrendLine } from './TrendLine'
export { default as StatusBox } from './StatusBox'
export { default as AvatarsRow } from './AvatarsRow'
export { default as Pagi } from './Pagi'
export { default as Navigator } from './Navigator'
export { default as ThemeSelector } from './ThemeSelector'
export { default as Tabber } from './Tabber'
export { default as TabSelector } from './TabSelector'
export { default as InlineTags } from './InlineTags'
export { default as InlineCommunities } from './InlineCommunities'

export { default as UserCell } from './UserCell'
export { default as SectionLabel } from './SectionLabel'
export { default as BuyMeChuanChuan } from './BuyMeChuanChuan'
export { default as VideoSourceInfo } from './VideoSourceInfo'

export { default as ContributorList } from './ContributorList'
export { default as GithubRepoPage } from './GithubRepoPage'
export { default as GithubUserCard } from './GithubUserCard'
export { default as SearchingLabel } from './SearchingLabel'
export { default as EmptyLabel } from './EmptyLabel'
export { default as FollowButton } from './FollowButton'
export { default as ThreadSelector } from './ThreadSelector'
export { default as CommunityList } from './CommunityList'
export { default as ContentSourceCard } from './ContentSourceCard'
export { default as CommunityStatesPad } from './CommunityStatesPad'
export { default as DiscussLinker } from './DiscussLinker'

export { default as StrategicPartners } from './StrategicPartners'
export { default as ArticleItemPrefixLabel } from './ArticleItemPrefixLabel'
export { default as ArticleActionsPanel } from './ArticleActionsPanel'

export { default as VideoPoster } from './VideoPoster'
export { default as VideoInfoCard } from './VideoInfoCard'

// loading component
export {
  CommentLoading,
  CheatSheetLoading,
  PostItemLoading,
  VideoItemLoading,
  RepoItemLoading,
  JobItemLoading,
  EditorLoading,
  ArticleContentLoading,
  CommunityHolder,
} from './LoadingEffects'

// UI library (currently use antd)
export { Button, Affix, Tabs, Tooltip, Icon, Input, Radio } from 'antd'
