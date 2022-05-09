import styled from 'styled-components'

import css, { theme } from '@/utils/css'

import CCSVG from '@/icons/article/CC'
import CCForbidSVG from '@/icons/article/CCForbid'
import CCApproveSVG from '@/icons/article/CCApprove'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  cursor: pointer;
`
const icon = `
  ${css.size(12)};

  ${Wrapper}:hover & {
    fill: ${theme('thread.articleTitle')};
  }

  transition: fill 0.2s;
`
const CC = styled(CCSVG)`
  ${icon};
  fill: ${theme('thread.extraInfo')};
`
const CCForbid = styled(CCForbidSVG)`
  ${icon};
  fill: ${theme('thread.extraInfo')};
`
const CCApprove = styled(CCApproveSVG)`
  ${icon};
  fill: ${theme('thread.extraInfo')};
`

export const Icon = {
  CC,
  CCForbid,
  CCApprove,
}

export const Text = styled.div`
  font-size: 12px;
  color: ${theme('thread.extraInfo')};
  margin-left: 6px;

  ${Wrapper}:hover & {
    color: ${theme('thread.articleTitle')};
  }
  transition: color 0.2s;
`
