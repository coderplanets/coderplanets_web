import styled from 'styled-components'
// import Img from '@/components/Img'
import { cs, theme } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flexColumnGrow()};
  width: calc(100% - 40px);
  margin-left: 5px;
`
export const Head = styled.div`
  color: ${theme('thread.articleTitle')};
`
export const Title = styled.span`
  font-size: 15px;
  margin-right: 10px;
`
export const TagsWrapper = styled.div`
  display: inline-block;
`
export const ExtraInfo = styled.div`
  ${cs.flex('align-center')};
  color: ${theme('thread.extraInfo')};
  font-size: 13px;
  margin-top: 4px;
`
export const DateText = styled.span`
  font-size: 12px;
  color: ${theme('thread.articleDigest')};
`
