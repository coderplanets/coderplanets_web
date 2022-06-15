import type { SnakeUpperCase } from '@/spec'

import type { TTab, TSettingField } from './spec'

export const TAB = {
  OVERVIEW: 'overview',
  // basic-info
  BASIC_INFO: 'basic_info',
  UI: 'ui',
  THREADS: 'threads',
  DOMAIN: 'domain',
  // analysis
  // --
  // contents
  TAGS: 'tags',
  POST: 'post',
  KANBAN: 'kanban',
  CHANGELOG: 'changelog',
  HELP: 'help',
  BLACKHOUSE: 'blackhouse',
  // integrates
  THIRD_PART: 'third_part',
  ADMINS: 'admins',
  WIDGETS: 'widgets',
} as Record<Uppercase<TTab>, TTab>

export const SETTING_FIELD = {
  PRIMARY_COLOR: 'primaryColor',
  POST_LAYOUT: 'postLayout',
  BANNER_LAYOUT: 'bannerLayout',
  CHANGELOG_LAYOUT: 'changelogLayout',
  TAG: 'tag',
} as Record<SnakeUpperCase<TSettingField>, TSettingField>
