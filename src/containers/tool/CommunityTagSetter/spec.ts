import type { TCommunity, TTag } from '@/spec'

export type TType =
  | 'move-community'
  | 'mirror-community'
  | 'unmirror-community'
  | 'select-community'
  | 'tag'

export type TTagView =
  | 'select'
  | 'update'
  | 'delete'
  | 'create-item'
  | 'update-item'

export type TCommunityView = 'searching' | 'search-error' | 'result' | 'default'

export type TLayout = 'create-works' | 'works' | 'guide-contribute'

export type TCommunitiesList = {
  canActOnSeleted: boolean
  searching: boolean
  searched: boolean
  searchValue: string
  selectedCommunities: TCommunity[]
  searchedCommunities: TCommunity[]
  commonUsedCommunities: TCommunity[]
}

export type TTagsList = {
  // canActOnSeleted: boolean
  loading: boolean
  tags: TTag[]
  selectedTags: TTag[]
}

export type TTexts = {
  header: string
  searchPlaceholder: string
  notice?: string
  commonUsedHint: string
  notFoundHint?: string
}
