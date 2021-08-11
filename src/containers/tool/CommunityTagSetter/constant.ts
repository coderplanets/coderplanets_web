import { TTagView, TCommunityView, TCommunityAction, TSetter } from './spec'

export const SETTER = {
  COMMUNITY: 'community' as TSetter,
  TAG: 'tag' as TSetter,
}

export const TAG_VIEW = {
  SELECT: 'select' as TTagView,
  UPDATE: 'update' as TTagView,
  DELETE: 'delete' as TTagView,
  CREATE_ITEM: 'create-item' as TTagView,
  UPDATE_ITEM: 'update-item' as TTagView,
}

export const COMMUNITY_VIEW = {
  SEARCHING: 'searching' as TCommunityView,
  SEARCH_ERROR: 'search-error' as TCommunityView,
  RESULT: 'result' as TCommunityView,
  DEFAULT: 'default' as TCommunityView,
}

export const COMMUNITY_ACTION = {
  MIRROR: 'mirror' as TCommunityAction,
  MOVE: 'move' as TCommunityAction,
}
