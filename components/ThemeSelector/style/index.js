import styled from 'styled-components'
import { lighten, darken } from 'polished'
import { selectorColors, theme } from '../../../utils'

const getBackground = type => {
  const themeName = type
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
  color: ${({ active, type }) =>
    active ? lighten(0.4, theme('bodyBg')) : getBackground(type)};

  &:after {
    content: 'T';
    position: absolute;
    color: ${({ active }) => (active ? '#ff9f8e' : '')};
    top: 14%;
    left: 35%;
  }
`
export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
`
