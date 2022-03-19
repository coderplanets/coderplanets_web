import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  width: 100%;
`
export const BannerWrapper = styled.div`
  position: relative;
  ${css.flex('align-center')};
  height: 130px;
  padding: 0 80px;
  border-radius: 6px;
  background: ${theme('banner.bg')};
`
export const IconBlock = styled.div`
  ${css.size(52)};
  margin-top: -20px;
  background: #083542; /* browser header bg */
  border: 1px solid;
  border-color: #042a35; /* browser tab bg */
  border-radius: 3px;
`
export const RealLogo = styled(Img)`
  ${css.size(52)};
  margin-top: -20px;
  margin-right: 20px;
  border: 1px solid;
  border-radius: 3px;
`
export const Intro = styled.div`
  ${css.flexColumn('align-start')};
  margin-top: -23px;
  margin-left: 20px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 16px;
  margin-bottom: 4px;
`
export const Desc = styled.div`
  font-size: 14px;
  color: ${theme('thread.articleDigest')};
  opacity: 0.8;
`
export const ThreadWrapper = styled.div`
  position: absolute;
  ${css.flex('align-center')};
  height: 20px;
  bottom: 8px;
`
export const ThreadItem = styled.div`
  margin-right: 32px;
`
export const FeedWrapper = styled.div`
  ${css.flexColumn('align-start')}
  margin-top: 10px;
  padding: 25px 80px;
`
export const Feed = styled.div<{ width: string }>`
  height: 10px;
  width: ${({ width }) => width};
  border-radius: 4px;
  background: ${theme('banner.bg')};
  margin-bottom: 16px;
`
