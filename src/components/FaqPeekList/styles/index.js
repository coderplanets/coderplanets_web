import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  position: relative;
  max-height: ${({ active }) => (active ? '220px' : '0')};
  height: 220px;
  /* border: ${({ active }) => (active ? '1px solid' : 'none')};
  border-left: none;
  border-right: none;
  border-color: ${({ active }) => (active ? '#126682' : 'transparent')}; */
  margin-top: ${({ active }) => (active ? '16px' : '0')};
  margin-bottom: ${({ active }) => (active ? '18px' : '0')};
  background: #002b35;
  padding: ${({ active }) => (active ? '15px' : '0')};

  margin-left: -25px;
  /* conent padding-left(25px) + padding-right(24px) */
  width: calc(100% + 49px);
  border-radius: 3px;

  transition: max-height 0.2s;

`
export const ArrowIcon = styled(Img)`
  fill: #072b36;
  position: absolute;
  top: -14px;
  right: 45px;
  height: 18px;
  width: 18px;
  transform: rotate(-90deg);
`
export const ContentWrapper = styled.div`
  display: ${({ active }) => (active ? 'flex' : 'none')};
  align-items: center;
  justify-content: flex-start;
  height: 100%;
`
export const GroupWrapper = styled.div`
  width: 280px;
  height: 180px;
  background: #0e303c;
  border-radius: 5px;
  padding: 10px;
  margin-right: 14px;
  border: 1px solid #0f4556;
`
export const Title = styled.div`
  color: ${theme('banner.title')};
  font-size: 14px;
  font-weight: bold;
`
export const ListWrapper = styled.div`
  ${css.flexColumn()};
  margin-top: 15px;
`
