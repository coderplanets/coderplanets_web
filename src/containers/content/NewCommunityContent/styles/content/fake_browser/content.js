import styled from 'styled-components'

import { cs, theme } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flexColumn()};
  width: 100%;
`
export const BannerWrapper = styled.div`
  position: relative;
  ${cs.flex('align-center')};
  height: 130px;
  padding: 0 30px;
  border-radius: 6px;
  background: ${theme('banner.bg')};
`
export const IconBlock = styled.div`
  width: 52px;
  height: 52px;
  margin-top: -20px;
  margin-right: 20px;
  background: #083542; /* browser header bg */
  border: 1px solid;
  border-color: #042a35; /* browser tab bg */
  border-radius: 3px;
  display: block;
`
export const Intro = styled.div`
  ${cs.flexColumn('align-start')};
  margin-top: -20px;
`
export const Title = styled.div`
  /* color: ${theme('banner.title')}; */
  font-size: 17px;
  margin-bottom: 4px;
`
export const Desc = styled.div`
  font-size: 14px;
  /* color: ${theme('banner.desc')}; */
`
export const ThreadWrapper = styled.div`
  position: absolute;
  ${cs.flex('align-center')};
  height: 20px;
  bottom: 5px;
`
export const ThreadItem = styled.div`
  margin-right: 32px;
`
export const FeedWrapper = styled.div`
  ${cs.flexColumn('align-start')}
  margin-top: 10px;
  padding: 20px 30px;
`
export const Feed = styled.div`
  height: 10px;
  width: ${({ width }) => width};
  border-radius: 4px;
  background: ${theme('banner.bg')};
  margin-bottom: 16px;
`
