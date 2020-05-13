import styled from 'styled-components'

import { cs, theme } from '@/utils'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${cs.flexColumn()};
`
export const ItemWrapper = styled.div`
  ${cs.flex('align-center')};
  padding: 8px 0;

  &:hover {
    cursor: pointer;
    padding: 10px 5px;
    border-radius: 4px;
    background: #093846;
  }
  transition: all 0.25s;
`
export const Logo = styled(Img)`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  display: block;
  /* TODO: for dark themes */
  filter: saturate(0.8);
  transition: all 0.25s;

  ${ItemWrapper}:hover & {
    width: 24px;
    height: 24px;
  }
`
export const PartnerInfo = styled.div`
  ${cs.flexColumn('justify-center')};
  margin-left: 10px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 13px;

  ${ItemWrapper}:hover & {
    font-weight: bold;
  }
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
  height: 1px;
  overflow-y: hidden;

  ${ItemWrapper}:hover & {
    height: 14px;
  }
  transition: all 0.25s;
`
