import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import Img from '@/Img'

import MakersSVG from '@/icons/menu/Makers'
import HotSVG from '@/icons/menu/Hot'
import PieceSVG from '@/icons/menu/Piece'
import ChartSVG from '@/icons/menu/Chart'
import SubscribeSVG from '@/icons/menu/Subscribe'

export const Wrapper = styled.div<{ mobile?: boolean }>`
  ${css.flexColumn('align-center')};
  width: ${({ mobile }) => (!mobile ? '430px' : '100%')};
  min-height: 300px;
  margin-top: 0;
`
export const BodyWrapper = styled.div`
  ${css.flex('align-center')};
  flex-wrap: wrap;
  margin-top: 25px;
`
export const Entry = styled.div<{ mobile?: boolean }>`
  ${css.flexColumn('align-start')};
  width: ${({ mobile }) => (!mobile ? '210px' : '48%')};
  height: 75px;
  padding-left: 20px;

  ${css.media.mobile`
    height: 88px;
  `};
`
export const Main = styled.a`
  ${css.flex('align-start')};
  text-decoration: none;
`
export const Title = styled.div<{ offset?: string }>`
  ${css.flex('align-center')};
  color: ${theme('thread.articleTitle')};
  font-weight: bold;
  margin-left: ${({ offset }) => offset || '10px'};

  &:hover {
    color: #2d7eb1; /* primaryColor */
    text-decoration: underline;
    text-decoration-color: #2d7eb1;
    cursor: pointer;
  }
`
export const Logo = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  ${css.size(18)};
  margin-top: 4px;

  ${Main}:hover & {
    fill: #2d7eb1; /* primaryColor */
    cursor: pointer;
  }
`

const baseIcon = `
  ${css.size(18)};
  margin-top: 4px;

  ${Main}:hover & {
    fill: ${theme('button.primary')};
    cursor: pointer;
  }
`
const Hot = styled(HotSVG)`
  ${baseIcon};
  fill: ${theme('thread.articleTitle')};
`
const Makers = styled(MakersSVG)`
  ${baseIcon};
  fill: ${theme('thread.articleTitle')};
`
const Piece = styled(PieceSVG)`
  ${baseIcon};
  fill: ${theme('thread.articleTitle')};
`
const Subscribe = styled(SubscribeSVG)`
  ${baseIcon};
  ${css.size(20)};
  fill: ${theme('thread.articleTitle')};
`
const Chart = styled(ChartSVG)`
  ${baseIcon};
  fill: ${theme('thread.articleTitle')};
`

export const Icon = {
  Hot,
  Makers,
  Piece,
  Subscribe,
  Chart,
}

export const SubscribeLogo = styled(Logo)`
  ${css.size(24)};
  margin-top: 0;
  margin-left: -2px;
`
export const ChartLogo = styled(Logo)`
  ${css.size(22)};
  margin-top: 2px;
  margin-left: -2px;
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
  margin-top: 5px;
  margin-left: 28px;
`
export const Wip = styled.div`
  color: #398a89;
  border: 1px solid;
  border-color: #007372;
  margin-left: 10px;
  font-size: 10px;
  padding: 0 4px;
  border-radius: 4px;
`
