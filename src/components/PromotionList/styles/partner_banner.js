import styled from 'styled-components'

import { css, theme } from '@/utils'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flexColumn()};
`
export const ItemWrapper = styled.div`
  ${css.flex('align-center')};
  padding: 8px 0;

  &:hover {
    cursor: pointer;
    padding: 8px 5px;
    border-radius: 4px;
  }
  transition: all 0.25s;
  transition-delay: 0.2s;
`
export const Logo = styled(Img)`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  display: block;
  /* TODO: for dark themes */
  filter: saturate(0.8);
  transition: all 0.25s;
  transition-delay: 0.2s;

  ${ItemWrapper}:hover & {
    width: 24px;
    height: 24px;
  }
`
export const PartnerInfo = styled.div`
  ${css.flexColumn('justify-center')};
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
  transition-delay: 0.2s;
`
