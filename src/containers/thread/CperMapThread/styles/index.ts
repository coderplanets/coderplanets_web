import styled from 'styled-components'

import css from '@/utils/css'
import { theme } from '@/utils/themes'

export const Wrapper = styled.div`
  /* 
   * magic number, if set 100% the map will jump in laptop screen 
   */
  width: 100%;
  min-height: 70vh;
  position: relative;
  padding-top: 10px;

  ${css.media.mobile`overflow: scroll`};
`
export const Title = styled.div``

export const MapWrapper = styled.div`
  /* 
   * magic number, if set 100% the map will jump in laptop screen 
   */
  width: 100%;
  height: 100%;
  min-height: 620px;
  ${css.media.mobile`width: 250%;`};
`
export const RealMap = styled.div`
  /* border-radius: 10px; */
  border: 1px solid;
  border-color: #003b49;
  border-bottom: none;
`
export const NoticeWrapper = styled.div`
  width: 100%;
  padding-left: 35px;
  padding-right: 70px;
  color: ${theme('thread.articleDigest')};
  font-size: 13px;
  margin-top: 30px;
  opacity: 0.8;
`
export const TheLink = styled.a`
  color: #139c9e;
  text-decoration: none;
  margin-left: 1px;
  margin-right: 1px;
  word-break: break-all;

  &:hover {
    color: #139c9e;
    cursor: pointer;
    text-decoration: none;
  }
`
