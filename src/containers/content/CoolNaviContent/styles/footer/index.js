import styled from 'styled-components'

import Img from '@components/Img'
import { cs, theme } from '@utils'

export const Wrapper = styled.div`
  ${cs.flex()};
  width: 100%;
  min-height: 160px;
  color: ${theme('thread.articleTitle')};
  margin-top: 30px;
`

const Block = styled.div`
  ${cs.flexColumn('justify-between')};
  padding: 16px;
  padding-right: 10px;
  background: ${theme('haveADrinkPage.bg')};
  border-radius: 5px;
  border: 1px solid;
  border-color: transparent;

  &:hover {
    border-color: #074c61;
  }
`
export const AboutBlock = styled(Block)`
  width: 250px;
  margin-right: 18px;
  cursor: pointer;
`
export const ContributorBlock = styled(Block)`
  width: calc(100% - 500px);
`
export const ContributorsWrapper = styled.div`
  ${cs.flex()};
  margin-top: -35px;
`
export const Avatar = styled(Img)`
  width: 20px;
  height: 20px;
  display: block;
  margin-right: 10px;
  border-radius: 100%;
`
export const MoreLink = styled.div`
  ${cs.flex('align-center')};

  &:hover {
    cursor: pointer;
    color: ${theme('thread.articleTitle')};
  }
`
export const MoreText = styled.div`
  ${Block}:hover & {
    color: #327ca1;
  }
`
export const ArrowIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  width: 18px;
  height: 18px;
  display: block;
  transform: rotate(180deg);
  margin-left: 6px;

  ${Block}:hover & {
    margin-left: 10px;
    fill: #327ca1;
  }
  transition: all 0.2s;
`
export const Desc = styled.div`
  margin-top: -10px;
  opacity: 0.6;

  ${Block}:hover & {
    opacity: 0.8;
  }
  transition: opacity 0.2s;
`
