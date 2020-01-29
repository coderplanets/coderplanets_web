import styled from 'styled-components'

import Img from '@Img'
import { cs, theme } from '@utils'

export const Wrapper = styled.div`
  ${cs.flex('align-center')}
  width: 420px;
  height: 85px;
  background: #003a49;
  border: 1px solid #003a49;
  padding: 0 20px;
  margin-right: 18px;
  margin-bottom: 18px;
  border-radius: 3px;

  &:hover {
    cursor: pointer;
    border: 1px solid #327faf;
  }
  transition: all 0.25s;
`
export const DatetimeWrapper = styled.div`
  ${cs.flexColumn('align-both')}
  width: 60px;
  height: 60px;
  border: 1px solid;
  border-color: #15576d;
  background: #023544;
  border-radius: 5px;
  margin-right: 20px;
`
export const Date = styled.div`
  font-size: 12px;
  color: ${theme('thread.articleDigest')};
`
export const Week = styled.div`
  color: #327faf;
`
export const IntroWrapper = styled.div`
  ${cs.flexColumn('align-start')}
`
export const Title = styled.div`
  font-size: 17px;
  color: ${theme('thread.articleTitle')};
  margin-bottom: 5px;
`
export const BodyWrapper = styled.div`
  ${cs.flex('align-center')}
  color: ${theme('thread.articleDigest')};
`
export const Icon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  width: 12px;
  height: 12px;
  display: block;
  margin-right: 3px;
`
