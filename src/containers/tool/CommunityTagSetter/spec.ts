export type TTagView =
  | 'select'
  | 'update'
  | 'delete'
  | 'create-item'
  | 'update-item'

export type TCommunityView = 'searching' | 'search-error' | 'result' | 'default'
export type TCommunityAction = 'mirror' | 'move'

export type TLayout = 'create-works' | 'works' | 'guide-contribute'
