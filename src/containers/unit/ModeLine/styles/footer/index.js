import styled from 'styled-components'

import Img from '@/components/Img'
import { cs, theme } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  position: fixed;
  left: 0;
  bottom: 0px;
  ${cs.flex('align-center')};
  color: ${theme('thread.articleTitle')};
  width: 100%;
  height: 28px;
  background: #0e3b4a;
  z-index: 1;
  /* opacity: 0.7; */
  /* padding: 0 6vw; */
  /* modal shadow */
  box-shadow: -5px 6px 37px -8px rgba(0, 0, 0, 0.42);
`
export const MoreLogo = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  width: 12px;
  height: 12px;
  display: block;
`
export const CommunityLogo = styled(Img)`
  width: 12px;
  height: 12px;
  margin-top: -1px;
  display: block;
`
export const Info = styled.div`
  ${cs.flex('align-center')};
  /* width: 25%; */
  /* min-width: 50%; */
  width: auto;
  height: 100%;
  /* border-right: 1px solid tomato; */
`
const Block = styled.div`
  position: relative;
  ${cs.flex('align-center')};
  color: ${theme('thread.articleTitle')};
  height: 100%;
  background: ${({ bgColor }) => bgColor};
  padding-left: 10px;
`
export const ArrowShape = styled.div`
  position: absolute;
  right: -10px;
  width: 0;
  height: 0;
  border-top: 16px solid transparent;
  border-bottom: 16px solid transparent;
  border-left: 10px solid;
  border-left-color: ${({ bgColor }) => bgColor};
  z-index: 1;
`
export const HomeBlock = styled(Block)`
  padding-left: 12px;
  padding-right: 6px;
`
export const CommunityBlock = styled(Block)`
  padding-left: 20px;
  padding-right: 6px;
`
export const AccountBlock = styled(Block)`
  padding-left: 8px;
  padding-right: 12px;
`
export const ArrowShapeLeft = styled(ArrowShape)`
  left: -10px;
  transform: rotate(180deg);
`
export const ItemsWrapper = styled.div`
  ${cs.flex('justify-between', 'align-center')};
  height: 100%;
  padding-top: 4px;
  width: auto;
  flex-grow: 1;
  height: 100%;
  padding-top: 4px;
  margin-left: 30px;
  margin-right: 30px;
`
export const Item = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 14px;
  /* margin-right: 15px; */

  :last-child {
    margin-right: 0;
  }
`
export const ItemIcon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  width: 15px;
  height: 15px;
  /* margin-right: 15px; */

  :last-child {
    margin-right: 0;
  }
`

//
export const CommunityInfoWrapper = styled.div`
  ${cs.flex('align-center')};
`
export const CommunityTitle = styled.div`
  color: #a0bebf;
  font-size: 12px;
  margin-left: 8px;
`
