import styled from 'styled-components'

import Img from '@/Img'
import { cs, theme } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flex('align-both')}
  flex-wrap: wrap;
  width: 100%;
`
export const Block = styled.div`
  ${cs.flexColumn('align-center', 'justify-between')}
  color: #708b96;
  width: 240px;
  height: 120px;
  border-radius: 4px;
  margin-right: 25px;
  margin-bottom: 30px;

  border: ${({ active }) =>
    active ? '1px solid #327faf;' : '1px solid #31576f;'};
  box-shadow: ${({ active }) =>
    active ? '0px 7px 20px 10px rgba(0, 0, 0, 0.15);' : 'none'};

  &:hover {
    cursor: pointer;
    border: 1px solid #327faf;
    box-shadow: 0px 7px 20px 10px rgba(0, 0, 0, 0.15); /* same with the popover */
  }
  transition: all 0.25s;
`

export const Header = styled.div`
  ${cs.flex('align-center', 'justify-between')}
  padding: 0 10px;
  height: 40px;
  width: 100%;
  background-color: #043b49;
`
export const Intro = styled.div`
  ${cs.flex('align-center')};
`
export const Icon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  width: 16px;
  height: 16px;
  display: block;
  margin-right: 8px;
`
export const Timestamp = styled.div``

export const Body = styled.div`
  ${cs.flexColumn('justify-center')};
  width: 100%;
  height: 100%;
  padding: 0 14px;
`
export const Title = styled.div`
  font-size: 17px;
  font-weight: bold;
`
export const Desc = styled.div`
  color: #577079;
  font-size: 14px;
  margin-top: 5px;
`
