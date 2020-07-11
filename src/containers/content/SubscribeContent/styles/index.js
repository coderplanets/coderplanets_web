import styled from 'styled-components'

// import Img from '@/Img'
import { cs, theme } from '@/utils'
import Sticky from '@/components/Sticky'

export const Wrapper = styled.div`
  ${cs.flexColumn('align-start')};
  width: 100%;
  /* 130 means height of (header + footer) */
  min-height: calc(100vh - 130px);
  margin-bottom: 50px;
  background-image: ${theme('banner.linearGradient')};
`
export const InnerWrapper = styled.div`
  ${cs.flex('align-start')}
  max-width: ${cs.MAX_CONTENT_WIDTH};
  padding: 0 6vw;
  margin-top: 6%;
  width: 100%;
  color: ${theme('thread.articleDigest')};

  ${cs.media.laptopLPadding};
`
export const StickyWrapper = styled(Sticky)`
  ${cs.flex('justify-center')}
  width: 40%;
`
