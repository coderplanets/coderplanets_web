import styled from 'styled-components'
import ReactSVG from 'react-svg'

export const Wrapper = styled.div``

export const HeaderWrapper = styled.div`
  display: flex;
`
export const Title = styled.div`
  font-size: 1em;
  color: #5c868b;
  margin-bottom: 10px;
  flex-grow: 1;
`
export const HelpText = styled.div`
  color: #e8e7e7;
  ${HeaderWrapper}:hover & {
    color: #81a5a8;
    cursor: pointer;
  }
  transition: color 0.2s;
`

export const IconList = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const PlanetsIcon = styled(ReactSVG)`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  margin-bottom: 3px;
  cursor: pointer;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
  transition: opacity 0.2s;
`
