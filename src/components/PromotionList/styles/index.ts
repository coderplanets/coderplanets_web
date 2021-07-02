import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div`
  margin-left: 20px;
  min-height: 150px;
  max-width: 180px;
`
export const Header = styled.div`
  ${css.flex('justify-between', 'align-center')};
  padding-top: 20px;
  margin-bottom: 12px;
  border-top: 1px solid;
  border-top-color: ${theme('thread.articleSpliter')};
  width: 80%;
`
export const Title = styled.div`
  font-size: 12px;
  color: ${theme('thread.articleDigest')};
  padding-top: 15px;
`
export const AboutIcon = styled(Img)`
  ${css.size(15)};
  fill: ${theme('thread.articleDigest')};
  opacity: 0;
  margin-top: 16px;

  &:hover {
    fill: ${theme('banner.title')};
    cursor: pointer;
  }

  ${Wrapper}:hover & {
    opacity: 1;
  }
  transition: all 0.25s;
`
