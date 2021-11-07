import type { TMode, TEditMode, TAPIMode } from './spec'

export const MODE = {
  TIMELINE: 'TIMELINE' as TMode,
  REPLIES: 'REPLIES' as TMode,
}

export const API_MODE = {
  ARTICLE: 'article' as TAPIMode,
  USER_PUBLISHED: 'user_published' as TAPIMode,
}

export const EDIT_MODE = {
  CREATE: 'CREATE' as TEditMode,
  UPDATE: 'UPDATE' as TEditMode,
  REPLY: 'REPLY' as TEditMode,
}
