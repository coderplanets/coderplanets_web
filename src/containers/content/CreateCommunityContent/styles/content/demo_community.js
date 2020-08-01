import styled from 'styled-components'

import { cs, theme } from '@/utils'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${cs.flex('align-center')};
  flex-wrap: wrap;
`
/* header bg */
export const Community = styled.div`
  position: relative;
  ${cs.flex('align-center', 'justify-between')};
  height: 26px;
  background: #043b49;
  border: 1px solid;
  border-color: #043b49;
  margin-right: 12px;
  border-radius: 20px;
  margin-bottom: 15px;
  &:hover {
    cursor: pointer;
    border: 1px solid;
    border-color: #33586e;
  }
`
export const Logo = styled(Img)`
  fill: #317faf;
  position: absolute;
  top: 2px;
  left: -5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: block;
  filter: saturate(0.6);
`
export const Title = styled.div`
  color: ${theme('thread.articleDigest')};
  padding-left: 24px;
  padding-right: 8px;
`
