import type { TTagMode } from '@/spec'

const TAG_MODE = {
  DEFAULT: 'default',
  LABEL: 'label',
} as Record<Uppercase<TTagMode>, TTagMode>

export default TAG_MODE
