import styled from 'styled-components'

import { cs, theme } from '@/utils'

import { getMaxWidth, getPadding } from '../metrics/top_bar'

export const WrapperBase = styled.header.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  z-index: 2;
  width: 100%;
  ${cs.flex('justify-center')};
  background: ${theme('header.bg')};
  opacity: 1;
  border-bottom: ${({ noBorder }) => (noBorder ? 'none' : '1px solid')};
  border-bottom-color: ${theme('header.spliter')};
  margin-left: ${({ leftOffset }) => leftOffset};
  box-shadow: ${({ noBorder }) => (noBorder ? 'none' : theme('drawer.shadow'))};
`
export const InnerWrapperBase = styled.div`
  ${cs.flex('align-center')};
  /* max-width: ${({ type }) => getMaxWidth(type)}; */
  padding: ${({ type, layout }) => getPadding(type, layout)};
  width: 100%;
  height: 33px;
  transition: all 0.2s;
`
export const Wrapper = styled.div`
  ${cs.flex('justify-start')};
  position: fixed;
  z-index: ${cs.zIndex.header};
  top: ${({ visiable }) => (visiable ? '0' : '-33px')};
  width: 100%;
  /* TODO: move namespace to modeline */
  background: ${theme('header.fixed')};
  opacity: ${({ visiable }) => (visiable ? 1 : '0')};
  /* border: 1px solid tomato; */
  height: 32px;
  box-shadow: -5px 6px 37px -8px rgba(0, 0, 0, 0.42);

  transition: top 0.3s;
  transition-delay: 1s;
`
export const InnerWrapper = styled(InnerWrapperBase)`
  ${cs.flex('align-center', 'space-between')};
`
export const TabsWrapper = styled.div`
  flex-grow: 1;
  max-width: calc(100% - 30px);
`
export const TagWrapper = styled.div`
  position: absolute;
  max-width: 60px;
  min-width: 50px;
  right: 0;
  z-index: 1;
  height: 100%;
`
