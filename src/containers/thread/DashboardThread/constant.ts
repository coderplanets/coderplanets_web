import type { TTab } from './spec'

export const TAB = {
  OVERVIEW: 'overview',
  BASIC_INFO: 'basic_info',
  UI: 'ui',
  THREADS: 'threads',
  DOMAIN: 'domain',
  THIRD_PART: 'third_part',
  ADMINS: 'admins',
  WIDGETS: 'widgets',
} as Record<Uppercase<TTab>, TTab>

export const holder = 1
