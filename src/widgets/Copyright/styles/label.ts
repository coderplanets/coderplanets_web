import styled from 'styled-components'

import { theme } from '@/utils/themes'
import css from '@/utils/css'

import CCSVG from '@/icons/article/CC'
import CCForbidSVG from '@/icons/article/CCForbid'
import CCApproveSVG from '@/icons/article/CCApprove'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  cursor: pointer;
`
const icon = `
  ${css.size(13)};

  ${Wrapper}:hover & {
    fill: ${theme('thread.articleTitle')};
  }

  transition: fill 0.2s;
`
const CC = styled(CCSVG)`
  ${icon};
  fill: ${theme('thread.articleDigest')};
`
const CCForbid = styled(CCForbidSVG)`
  ${icon};
  fill: ${theme('thread.articleDigest')};
`
const CCApprove = styled(CCApproveSVG)`
  ${icon};
  fill: ${theme('thread.articleDigest')};
`

export const Icon = {
  CC,
  CCForbid,
  CCApprove,
}

export const Text = styled.div`
  font-size: 13px;
  color: ${theme('thread.articleDigest')};
  margin-left: 6px;

  ${Wrapper}:hover & {
    color: ${theme('thread.articleTitle')};
  }
  transition: color 0.2s;
`
