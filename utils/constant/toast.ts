import type { TToastPos } from '@/spec'

const DEFAULT_TOAST_OPTIONS = {
  title: 'toast',
  message: '',
  msg: '',
  position: 'topCenter' as TToastPos,
  timeout: 3000,
  icon: '',
  progressBarColor: 'yellogreen',
  displayMode: 'replace',
  transitionIn: 'fadeInDown',
}

export default DEFAULT_TOAST_OPTIONS
