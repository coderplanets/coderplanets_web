import styled from 'styled-components'
import { lighten, darken } from 'polished'
import { selectorColors } from '../../../utils'

const getBackground = props => {
  const themeName = props.type
  return themeName === 'yellow'
    ? darken(0.05, selectorColors[themeName])
    : lighten(0.05, selectorColors[themeName])
}

export const ThemeDot = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 100%;
  margin-right: 10px;
  background: ${props => getBackground(props)};
  position: relative;
  cursor: pointer;
  color: ${props =>
    props.active ? lighten(0.4, props.theme.body_bg) : getBackground(props)};

  &:after {
    content: 'T';
    position: absolute;
    color: ${props => (props.active ? '#ff9f8e' : '')};
    top: 14%;
    left: 35%;
  }
`
export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
`
