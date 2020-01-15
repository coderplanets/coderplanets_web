import styled from 'styled-components'

// import Img from '@components/Img'
import { cs, theme } from '@utils'

export const Wrapper = styled.div`
  width: 100%;
  min-height: 200px;
  color: ${theme('thread.articleTitle')};
  background: ${theme('haveADrinkPage.bg')};
  padding: 20px;
  margin-top: 30px;
`

export const Header = styled.div`
  ${cs.flex('align-center')};
  width: 100%;
`

export const HowToText = styled.div`
  font-size: 14px;
  color: ${theme('thread.articleDigest')};

  &:hover {
    cursor: pointer;
    color: ${theme('thread.articleTitle')};
  }
`
