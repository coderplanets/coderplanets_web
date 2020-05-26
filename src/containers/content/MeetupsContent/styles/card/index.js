import styled from 'styled-components'

import Img from '@/Img'
import { cs, theme } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flex()}
  width: 300px;
  height: 210px;
  padding: 20px 5px;
  border-bottom: 1px solid #054353;
  color: ${theme('thread.articleDigest')};
`
export const ContentsWrapper = styled.div`
  ${cs.flexColumn()};
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
`
export const Desc = styled.div`
  font-size: 13px;
  color: ${theme('thread.articleDigest')};
  opacity: 0.8;
  margin-bottom: 18px;
`
export const BodyWrapper = styled.div`
  ${cs.flex('align-center')}
  font-size: 13px;
  color: ${theme('thread.articleDigest')};
`
export const LocationWrapper = styled(BodyWrapper)`
  margin-top: 3px;
`
export const Company = styled.div`
  color: ${theme('thread.articleTitle')};
`
export const Icon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  width: 12px;
  height: 12px;
  display: block;
  margin-right: 3px;
`
