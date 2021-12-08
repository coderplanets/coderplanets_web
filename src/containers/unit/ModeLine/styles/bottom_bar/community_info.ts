import styled from 'styled-components'

import Img from '@/Img'
import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
`
export const Logo = styled(Img)<{ isExpand: boolean }>`
  width: ${({ isExpand }) => (isExpand ? '12px' : '14px')};
  height: ${({ isExpand }) => (isExpand ? '12px' : '14px')};
  margin-top: -1px;
  display: block;
  margin-right: ${({ isExpand }) => (isExpand ? '0' : '10px')};
  transition: all 0.2s;
`
export const Title = styled.div<{ isSubscribed?: boolean }>`
  ${css.cutRest('50px')};
  color: ${({ isSubscribed }) => (isSubscribed ? '#b4e1e2' : '#a0bebf')};
  font-size: 12px;
  margin-left: 8px;
  margin-right: 8px;
`
export const HomeTitle = styled(Title)`
  margin-left: 0;
`
export const DefaultTitle = styled(Title)`
  margin-left: 0;
`
