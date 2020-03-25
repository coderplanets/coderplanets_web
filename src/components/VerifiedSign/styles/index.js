import styled from 'styled-components'

import Img from '@Img'
import { cs, theme } from '@utils'

export const Wrapper = styled.div.attrs(props => ({
  'data-testid': props.testid,
}))`
  ${cs.flex('align-center')};
  margin-left: 12px;
  cursor: pointer;
  background: ${({ active }) => (active ? '#044c5f' : 'transparent')};
  padding: ${({ active }) => (active ? '0 5px' : '0')};
  border-radius: ${({ active }) => (active ? '5px' : '0')};

  &:hover {
    background: #044c5f;
    padding: 0 5px;
    border-radius: 5px;
  }

  transition: all 0.25s;
`
export const Icon = styled(Img)`
  fill: ${theme('baseColor.green')};
  display: block;
  padding: 0;
  margin-right: 4px;
  width: 11px;
  height: 11px;
`
export const Text = styled.div`
  color: ${theme('baseColor.green')};
  font-size: 11px;
  opacity: ${({ active }) => (active ? 1 : 0)};
  outline: none;

  ${Wrapper}:hover & {
    opacity: 1;
  }
  transition: opacity 0.25s;
`
export const PopContentWrapper = styled.div`
  text-align: left;
  width: 200px;
  font-size: 13px !important;
  line-height: 1.6;
`
export const PopHeader = styled.div`
  ${cs.flex('align-center')}
  margin-bottom: 10px;
`
export const PopHeaderIcon = styled(Icon)`
  width: 14px;
  height: 14px;
`
export const PopHeaderText = styled.div`
  color: ${theme('baseColor.green')};
  font-size: 13px;
  font-weight: bold;
`
export const PopHighlight = styled.span`
  font-size: 14px;
  font-weight: bold;
`
export const RulesWrapper = styled.div`
  width: 100%;
  margin-top: 15px;
  margin-bottom: 5px;
  z-index: 100000;
`
