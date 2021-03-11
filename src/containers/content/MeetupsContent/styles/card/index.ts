import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex()}
  width: 33%;
  height: 210px;
  padding: 20px 5px;
  border-top: 1px solid;
  border-top-color: transparent;
  border-bottom: 1px solid;
  border-bottom-color: #054353;
  color: ${theme('thread.articleDigest')};

  &:hover {
    background: #04303c;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 24px;
    border-bottom-color: transparent;
    border-top: 1px solid;
    border-top-color: #327faf;
  }
  transition: border-top 0.25s ease-out, box-shadow 0.2s ease-in;
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
export const PreviewImg = styled(Img)`
  width: 80px;
  height: 50px;
  border-radius: 4px;
  display: block;
  margin-left: 10px;
`
export const FooterWrapper = styled.div`
  ${css.flex('align-center')}
  font-size: 13px;
  color: ${theme('thread.articleDigest')};
`
export const Company = styled.div`
  color: ${theme('thread.articleTitle')};
`
export const Icon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(12)};
  margin-right: 3px;
`
