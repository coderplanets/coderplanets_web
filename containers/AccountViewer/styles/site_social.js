import styled from 'styled-components'

import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
`
export const LeftPart = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`
export const RightPart = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 2px solid;
  border-color: ${theme('preview.divider')};
`
export const RightWrapper = styled.div`
  display: flex;
  height: 100%;
`
export const NumberDivider = styled.div`
  border-left: 1px solid;
  border-color: ${theme('preview.divider')};
  margin-left: 10px;
  margin-right: 10px;
  opacity: 0.5;
`
export const AchieveWrapper = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
`
