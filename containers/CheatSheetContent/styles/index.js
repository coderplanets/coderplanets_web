import styled from 'styled-components'
import { setLightness, setSaturation, opacify } from 'polished'

/* import { theme } from '../../../utils' */

// visibility: ${props => (props.active === props.name ? 'visible' : 'hidden')};

export const CategoryWrapper = styled.div`
  display: flex;
  width: 100%;
`

export const Category = styled.div`
  width: 100px;
  height: 50px;
  border-radius: 5px;
  margin-right: 3em;
  margin-bottom: 3em;
  background: ${({ bg }) => bg};
`

export const CheatsheetItem = styled.div`
  width: 100px;
  margin: 10px 20px;
  display: flex;
  flex-direction: column;
  height: 30px;
  justify-content: center;
  border-radius: 4px;
  background-color: ${({ fg }) => opacify(0.01, setSaturation(0.1, fg))};
`
export const Entry = styled.div`
  font-size: 1.2em;
  text-align: center;
  color: ${({ fg }) => setLightness(0.52, setSaturation(0.2, fg))};

  &:hover {
    cursor: pointer;
    color: ${({ fg }) => setLightness(0.6, setSaturation(0.3, fg))};
  }
`

export const Divider = styled.div`
  border-bottom: 1px solid grey;
  margin: 2em 0;
`
