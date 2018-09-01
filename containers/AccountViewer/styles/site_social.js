import styled from 'styled-components'

import { theme } from '../../../utils'
import { Img } from '../../../components'

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
  color: ${theme('banner.desc')};
  padding-top: 8px;
  padding-bottom: 8px;
`
export const AchieveLine = styled.div`
  display: flex;
  align-items: flex-end;
`
export const AchieveText = styled.div`
  font-size: 0.9rem;
  display: flex;
  align-items: baseline;
`
export const AchieveIcon = styled(Img)`
  fill: ${theme('banner.desc')};
  width: 16px;
  height: 16px;
  margin-right: 3px;
`
export const AcheveNumber = styled.div`
  font-size: 1.1rem;
  color: ${theme('banner.title')};
  margin-left: 3px;
  margin-right: 3px;
`
