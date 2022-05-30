import type { TPublishMode } from '@/spec'

export const PUBLISH_MODE = {
  DEFAULT: 'default',
  CHANGELOG: 'changelog',
  HELP: 'help',
} as Record<Uppercase<TPublishMode>, TPublishMode>

export const holder = 1
