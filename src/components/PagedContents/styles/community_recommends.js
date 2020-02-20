import styled from 'styled-components'

import Img from '@Img'
import { cs } from '@utils'

export const Wrapper = styled.div`
  ${cs.flexColumn('align-center')};
  margin-top: -5px;
`
export const Title = styled.div`
  font-size: 13px;
  margin-bottom: 4px;

  &:before {
    content: '- ';
  }
  &:after {
    content: ' -';
  }
`
export const ListWrapper = styled.div`
  ${cs.flex('align-center')};
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
