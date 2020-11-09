import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  position: relative;
  max-height: ${({ active }) => (active ? '180px' : '0')};
  border: ${({ active }) => (active ? '1px solid' : 'none')};
  border-left: none;
  border-right: none;
  border-color: ${({ active }) => (active ? '#126682' : 'transparent')};
  margin-top: ${({ active }) => (active ? '16px' : '0')};
  margin-bottom: ${({ active }) => (active ? '18px' : '0')};
  background: #002b35;
  padding: ${({ active }) => (active ? '15px' : '0')};
  transition: max-height 0.25s;
`
export const ArrowIcon = styled(Img)`
  fill: #126682;
  position: absolute;
  top: -14px;
  right: 22px;
  height: 18px;
  width: 18px;
  transform: rotate(-90deg);
`
export const ContentWrapper = styled.div`
  display: ${({ active }) => (active ? 'block' : 'none')};
  /* opacity: ${({ active }) => (active ? '1' : '0')}; */
  /* transition: opacity 0.35s; */
`
export const Title = styled.div`
  color: ${theme('banner.title')};
  font-size: 14px;
  font-weight: bold;
`
export const ListWrapper = styled.div`
  ${css.flex()};
  flex-wrap: wrap;
  margin-top: 15px;
`
