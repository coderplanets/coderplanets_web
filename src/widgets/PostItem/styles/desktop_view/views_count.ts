import styled from 'styled-components'

import css, { theme } from '@/utils/css'

import ViewedSVG from '@/icons/article/Viewed'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
`
export const HighlightWrapper = styled(Wrapper)`
  font-weight: 600;
  background: ${theme('heightGradient')};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
export const ViewsIcon = styled(ViewedSVG)<{ highlight?: boolean }>`
  fill: ${({ highlight }) =>
    highlight ? theme('heightIcon') : theme('thread.extraInfo')};
  ${css.size(12)};
  margin-right: 3px;
`
export const GTDBadgeWrapper = styled.div`
  position: absolute;
  top: 41px;
  right: -5px;
`
