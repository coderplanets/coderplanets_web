import styled from 'styled-components'

import { css } from '@/utils'

import { SwitchBarBase } from './gallery_base'

export const Wrapper = styled.div`
  ${css.flex()};
  width: 26px;
  height: 16px;
  cursor: pointer;
  transform: scale(0.8);
`
export const MainBar = styled(SwitchBarBase)`
  width: 14px;
  height: 100%;
`
export const SubBarWrapper = styled.div`
  ${css.flex('justify-between')};
  flex-wrap: wrap;
  width: 11px;
  height: 100%;
  margin-left: 3px;
`
export const SubBar = styled(SwitchBarBase)<{ marginBottom: boolean }>`
  width: 4px;
  height: 6px;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? '2px' : 'none')};
  height: ${({ marginBottom }) => (marginBottom ? '7px' : '6px')};
`
