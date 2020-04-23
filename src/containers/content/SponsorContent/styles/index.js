import styled from 'styled-components'

// import Img from '@Img'
import { cs, theme } from '@utils'

export const Wrapper = styled.div`
  ${cs.flexColumn('align-both')}
  width: 100%;
  min-height: 100vh;
  margin-bottom: 50px;
  background-image: ${theme('banner.linearGradient')};
`
export const InnerWrapper = styled.div`
  ${cs.flexColumn('align-both')}
  padding: 10px 6vw;
  margin-top: 12px;
  width: 100%;
  max-width: ${cs.MAX_CONTENT_WIDTH};
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 1px 4px;
`

export const ContentWrapper = styled.div`
  ${cs.flexColumnGrow()};
  max-width: 100%;
`
export const TabsWrapper = styled.div`
  ${cs.flex('justify-center')};
  width: 100%;
  border-bottom: 1px solid;
  border-bottom-color: #094454;
`
export const Title = styled.h2`
  color: ${theme('thread.articleTitle')};
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
`
