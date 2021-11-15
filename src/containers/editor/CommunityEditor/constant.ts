import type { TCommunityType, TStep } from './spec'

export const TRANS = {
  STANDER: '公共',
  CITY: '城市',
  WORKS: '作品',
  TEAM: '团队',
}

export const STEP = {
  SELECT_TYPE: 'SELECT_TYPE' as TStep,
  SETUP_DOMAIN: 'SETUP_DOMAIN' as TStep,
  SETUP_INFO: 'SETUP_INFO' as TStep,
  MORE_INFO: 'MORE_INFO' as TStep,
  FINISHED: 'FINNISHED' as TStep,
}

export const COMMUNITY_TYPE = {
  STANDER: 'STANDER' as TCommunityType,
  CITY: 'CITY' as TCommunityType,
  WORKS: 'WORKS' as TCommunityType,
  TEAM: 'TEAM' as TCommunityType,
}
