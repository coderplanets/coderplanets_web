import type { TCommunity } from '@/spec'

export type TSetter = 'community' | 'tag'

export type TTagView =
  | 'select'
  | 'update'
  | 'delete'
  | 'create-item'
  | 'update-item'

export type TCommunityView = 'searching' | 'search-error' | 'result' | 'default'
export type TCommunityAction = 'mirror' | 'move'

export type TLayout = 'create-works' | 'works' | 'guide-contribute'

export type TCommunitiesList = {
  searching: boolean
  searchValue: string
  selectedCommunities: TCommunity[]
  searchedCommunities: TCommunity[]
  commonUsedCommunities: TCommunity[]
}
