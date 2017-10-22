import styled from 'styled-components'
import { lighten, darken } from 'polished'
import { selectorColors } from '../../utils/themes'

const getBackground = props => {
  const themeName = props.type
  return themeName === 'yellow'
    ? darken(0.05, selectorColors[themeName])
    : lighten(0.05, selectorColors[themeName])
}

/* background: ${props => lighten(0.05, props.theme.body_bg)}; */

export const ThemeSelectorWraper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const ThemeSelector = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  margin-right: 10px;
  background: ${props => getBackground(props)};
  position: relative;
  color: ${props =>
    props.active ? lighten(0.4, props.theme.body_bg) : getBackground(props)};

  &:after {
    content: '✓';
    position: absolute;
    top: 15%;
    left: 35%;
  }
`

// ${props => 'x')}
// ${props => (props.active ? '✓' : 'x')}
// const Fuck = <Flex><ThemeSelector></Flex>
