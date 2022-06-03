import styled from 'styled-components'

import css, { theme } from '@/utils/css'

import ArchivedSVG from '@/icons/Archived'
import LockSVG from '@/icons/Lock'
import NoticeSVG from '@/icons/Notice'
import InfoSVG from '@/icons/Info'

const baseIcon = `
  ${css.size(15)};
  margin-right: 10px;
  margin-top: 5px;
`
export const LockIcon = styled(LockSVG)`
  fill: #a57a32;
  ${baseIcon};
`
export const NoticeIcon = styled(NoticeSVG)`
  fill: #a57a32;
  ${baseIcon};
`
export const InfoIcon = styled(InfoSVG)`
  fill: ${theme('thread.articleDigest')};
  ${baseIcon};
`
export const ArchivedIcon = styled(ArchivedSVG)`
  fill: #a57a32;
  ${baseIcon};
`
