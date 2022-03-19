import styled from 'styled-components'

import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex()}
  width: 100%;
  /* min-height: 210px; */
  margin-right: 20px;
  padding: 15px;
  padding-bottom: 20px;
  padding-right: 10px;
  padding-left: 5px;
  border-radius: 8px;
  margin-bottom: 20px;

  color: ${theme('thread.articleDigest')};
  border: 1px solid;
  border-top: 3px solid;
  border-color: transparent;

  background: #0d3644;

  &:hover {
    border-color: ${theme('button.primary')};
  }
  transition: all 0.1s;
`
export const ContentsWrapper = styled.div`
  ${css.flexColumn()};
  flex-grow: 1;
  width: 100%;
`
export const Label = styled.div`
  color: #3a81ab;
  font-size: 13px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 16px;
  margin-bottom: 10px;
  cursor: pointer;
`
export const Desc = styled.div`
  font-size: 13px;
  color: ${theme('thread.articleDigest')};
  opacity: 0.8;
  margin-bottom: 18px;
  cursor: pointer;
`
export const Icon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(12)};
  margin-right: 3px;
`

export const ExtraWrapper = styled.div`
  ${css.flex('align-center')}
  font-size: 13px;
`
export const FooterWrapper = styled.div`
  ${css.flex('align-center')}
  margin-top: 12px;
  margin-left: -3px;
`
