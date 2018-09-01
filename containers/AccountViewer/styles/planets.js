import styled from 'styled-components'

import { theme } from '../../../utils'
import { Img } from '../../../components'

export const Wrapper = styled.div``

export const HeaderWrapper = styled.div`
  display: flex;
`
export const Title = styled.div`
  font-size: 1em;
  color: ${theme('preview.title')};
  margin-bottom: 10px;
  flex-grow: 1;
`
export const HelpText = styled.div`
  color: ${theme('preview.helper')};
  ${HeaderWrapper}:hover & {
    color: ${theme('preview.helperHover')};
    cursor: pointer;
  }
  transition: color 0.2s;
`

export const IconList = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const PlanetsIcon = styled(Img)`
  width: 26px;
  height: 26px;
  margin-right: 8px;
  margin-bottom: 3px;
  cursor: pointer;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
  transition: opacity 0.2s;
`
