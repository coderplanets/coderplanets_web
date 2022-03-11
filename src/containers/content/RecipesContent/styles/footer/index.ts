import styled from 'styled-components'

import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex()};
  width: 100%;
  min-height: 160px;
  color: ${theme('thread.articleTitle')};
  margin-top: 30px;
`

const Block = styled.div`
  ${css.flexColumn('justify-between')};
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
`
export const ContributorBlock = styled(Block)`
  width: calc(100% - 500px);
`
export const ContributorsWrapper = styled.div`
  ${css.flex()};
  margin-top: -35px;
`
export const Avatar = styled(Img)`
  ${css.size(20)};
  margin-right: 10px;
  border-radius: 100%;
`
export const Desc = styled.div`
  margin-top: -10px;
  opacity: 0.6;

  ${Block}:hover & {
    opacity: 0.8;
  }
  transition: opacity 0.2s;
`
