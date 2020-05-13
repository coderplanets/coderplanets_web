import styled from 'styled-components'

import Img from '@/Img'
import { cs, theme } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flex('align-center')}
  position: relative;
  width: calc(50% - 10px);
  height: 85px;
  background: #003a49;
  border: 1px solid;
  border-color: ${({ finished }) => (finished ? 'none' : '#003a49')};
  padding: 0 12px;
  padding-right: 8px;
  margin-right: 18px;
  margin-bottom: 18px;
  border-radius: 3px;

  &:nth-child(even) {
    margin-right: 0;
  }

  &:hover {
    cursor: pointer;
    border: 1px solid;
    border-color: ${({ finished }) =>
      finished ? 'none' : theme('content.cardBorderHover')};
    box-shadow: ${({ finished }) =>
      finished ? 'none' : '0px 7px 20px 10px rgba(0, 0, 0, 0.15)'};
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
  width: calc(100% - 20px);
  position: relative;
`
export const Title = styled.div`
  ${cs.flex('align-center')};
  color: ${theme('thread.articleTitle')};
  margin-bottom: 5px;
`
export const TitleText = styled.div`
  text-indent: 35px;
  font-size: 16px;

  ${Wrapper}:hover & {
    font-weight: ${({ finished }) => (finished ? 'normal' : 'bold')};
  }
`
export const Tag = styled.div`
  margin-right: 8px;
  font-size: 12px;
  color: #3680a8;
  padding: 0 4px;
  border-radius: 4px;
  background: #044354;
  position: absolute;
  top: 3px;
  left: -3px;
`
export const BodyWrapper = styled.div`
  ${cs.flex('align-center')}
  font-size: 14px;
  color: ${theme('thread.articleDigest')};
`
export const Icon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  width: 12px;
  height: 12px;
  display: block;
  margin-right: 3px;
`
export const FinishedHole = styled.div`
  position: absolute;
  background: #002a34;
  border: 1px solid;
  border-color: #00576c;
  width: 20px;
  height: 20px;
  bottom: 10px;
  right: 12px;
  border-radius: 50%;
`
