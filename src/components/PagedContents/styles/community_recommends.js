import styled from 'styled-components'

import Img from '@/Img'
import { css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flexColumn('align-center')};
  margin-top: -5px;
`
export const Title = styled.div`
  font-size: 13px;
  margin-bottom: 4px;
  opacity: 0;

  &:before {
    content: '- ';
  }
  &:after {
    content: ' -';
  }

  ${Wrapper}:hover & {
    opacity: 1;
  }

  transform: opacity 0.25s;
`
export const ListWrapper = styled.div`
  ${css.flex('align-center')};
`
export const Community = styled.div`
  margin-right: 10px;
  opacity: 0.7;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }

  :last-child {
    margin-right: 0;
  }
  transition: all 0.25s;
`
export const Logo = styled(Img)`
  width: 18px;
  height: 18px;
`
