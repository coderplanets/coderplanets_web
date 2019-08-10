import styled from 'styled-components'
import { theme, cs } from '@utils'

export const PagiWrapper = styled.div`
  text-align: center;
  margin-top: ${({ top }) => top};
  margin-bottom: ${({ bottom }) => bottom};
  margin-left: ${({ left }) => left};
`

export const DesktopPagiWrapper = styled.div`
  ${cs.media.mobile`
    display: none;
  `};
`
export const MobilePagiWrapper = styled.div`
  display: none;
  ${cs.media.mobile`
    display: block;
  `};
`

export const CustomText = styled.a`
  ${cs.media.tablet`display: none`};
`

export const BottomMsg = styled.div`
  font-size: 1.1rem;
  color: ${theme('thread.articleDigest')};
  opacity: 0.7;
  &:before {
    content: '~~';
    margin-right: 10px;
  }
  &:after {
    content: '~~';
    margin-left: 10px;
  }
`
