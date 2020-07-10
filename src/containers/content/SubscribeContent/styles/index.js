import styled from 'styled-components'

// import Img from '@/Img'
import { cs, theme } from '@/utils'
import Sticky from '@/components/Sticky'

export const Wrapper = styled.div`
  ${cs.flexColumn('align-both')};
  width: 100%;
  min-height: 100vh;
  margin-bottom: 50px;
  background-image: ${theme('banner.linearGradient')};
`
export const InnerWrapper = styled.div`
  ${cs.flex('align-start')}
  max-width: ${cs.MAX_CONTENT_WIDTH};
  padding: 0 6vw;
  margin-top: 6%;
  width: 100%;
  height: 100%;
  min-height: 90vh;
  color: ${theme('thread.articleDigest')};

  ${cs.media.laptopLPadding};
`
export const StickyWrapper = styled(Sticky)`
  ${cs.flex('justify-center')}
  width: 100%;
`
