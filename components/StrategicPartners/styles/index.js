import styled from 'styled-components'

// import Img from 'Img'
import { cs, theme } from 'utils'

export const Wrapper = styled.div`
  margin-left: 12%;
  margin-top: 20px;
`
export const Header = styled.div`
  ${cs.flex('justify-between')};
  align-items: center;
  margin-bottom: 12px;
`
export const Title = styled.div`
  color: ${theme('thread.articleDigest')};
`
export const Closer = styled.div`
  font-size: 0.7rem;
  color: ${theme('thread.articleDigest')};
  &:hover {
    color: ${theme('banner.title')};
    cursor: pointer;
  }
  opacity: 0;

  ${Wrapper}:hover & {
    opacity: 1;
  }
  transition: all 0.2s;
`
