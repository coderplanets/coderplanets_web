import styled from 'styled-components'

import { css, theme, WIDTH } from '@/utils'
import Img from '@/Img'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${css.flexColumn('align-both')}
  width: 100%;
  min-height: 100vh;
  margin-bottom: 50px;
  background-image: ${theme('banner.linearGradient')};
`
export const InnerWrapper = styled.div`
  ${css.flexColumn('align-both')}
  padding: 10px 0;
  margin-top: 12px;
  width: 100%;
  border-radius: 8px;
`
export const ContentWrapper = styled.div`
  ${css.flexColumn('align-center')};
  max-width: ${WIDTH.SPONSOR.CONTENT};
`
export const TabsWrapper = styled.div`
  ${css.flex('justify-center')};
  width: 45%;
  border-bottom: 1px solid;
  border-bottom-color: #094454;
`
export const Title = styled.h2`
  color: ${theme('thread.articleTitle')};
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
`
export const HeartIcon = styled(Img)`
  fill: ${theme('baseColor.red')};
  width: 14px;
  height: 14px;
  display: block;
  margin-right: 8px;
`
