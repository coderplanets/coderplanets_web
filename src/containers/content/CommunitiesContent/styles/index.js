import styled from 'styled-components'

import { cs, theme } from '@utils'
import Img from '@Img'

// import Img from '@components/Img'

export const Wrapper = styled.div`
  ${cs.flexColumn()};
`
export const ContentWrapper = styled.div`
  ${cs.flex('align-both')};
  margin-top: 45px;
`
export const InnerWrapper = styled.div`
  ${cs.flex()};
  width: 100%;
  height: 100%;
  max-width: ${cs.ARTICLE_PAGE_MAX_CONTENT_WIDTH};
  padding-left: 4vw;
  padding-right: 4vw;
`

export const FiltersWrapper = styled.div`
  ${cs.flex('justify-end')}
  width: 10%;
  margin-right: 2%;
`
export const ContentsWrapper = styled.div`
  ${cs.flexColumn('justify-center')};
  width: 88%;
`
export const SubscribedBox = styled.div`
  color: ${theme('baseColor.green')};
  font-weight: bold;
`

export const BtnWrapper = styled.div`
  ${cs.flex('align-center')};
`

export const PrefixIcon = styled(Img)`
  fill: ${({ primary }) =>
    primary ? theme('button.primary') : theme('button.fg')};
  width: 14px;
  height: 14px;
  margin-right: 3px;
  display: block;
`
export const Text = styled.div``
