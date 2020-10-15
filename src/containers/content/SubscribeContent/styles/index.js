import styled from 'styled-components'

// import Img from '@/Img'
import { css, theme } from '@/utils'
import Sticky from '@/components/Sticky'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${css.flexColumn('align-start')};
  width: 100%;
  /* 130 means height of (header + footer) */
  min-height: calc(100vh - 130px);
  margin-bottom: 50px;
  background-image: ${theme('banner.linearGradient')};
`
export const InnerWrapper = styled.div`
  ${css.flex('align-start')}
  max-width: ${css.MAX_CONTENT_WIDTH};
  padding: ${() => css.media.laptopLPadding};
  width: 100%;
  color: ${theme('thread.articleDigest')};
`
export const StickyWrapper = styled(Sticky)`
  ${css.flex('justify-center')}
  width: 40%;
`
