import type { TCommunityType, TStep } from './spec'

// local namespace
export const LN = {
  COMMUNITY_TYPE: {
    STANDER: 'STANDER' as TCommunityType,
    CITY: 'CITY' as TCommunityType,
    WORKS: 'WORKS' as TCommunityType,
    TEAM: 'TEAM' as TCommunityType,
  },
  STEP: {
    SELECT_TYPE: 'SELECT_TYPE',
    SETUP_DOMAIN: 'SETUP_DOMAIN',
    SETUP_INFO: 'SETUP_INFO',
  },
}

export const STEP = {
  SELECT_TYPE: 'SELECT_TYPE' as TStep,
  SETUP_DOMAIN: 'SETUP_DOMAIN' as TStep,
  SETUP_INFO: 'SETUP_INFO' as TStep,
}

export const COMMUNITY_TYPE = {
  STANDER: 'STANDER' as TCommunityType,
  CITY: 'CITY' as TCommunityType,
  WORKS: 'WORKS' as TCommunityType,
  TEAM: 'TEAM' as TCommunityType,
}
