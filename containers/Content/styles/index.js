import styled from 'styled-components'
import { setLightness, setSaturation } from 'polished'

import { theme } from '../../../utils/themes'

// visibility: ${props => (props.active === props.name ? 'visible' : 'hidden')};

export const Hidder = styled.div`
  display: ${props => (props.active === props.name ? 'block' : 'none')};
`

export const Wrapper = styled.div`
  margin: 30px;
  width: 95.5%;
  height: 70%;
  min-height: 70vh;
  background: ${theme('content.bg')};
  color: ${theme('font')};
  border-radius: 10px;
  padding: 3em 6em;
  padding-top: 1.5em;
`

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
  background: ${props => props.bg};
`

export const Desc = styled.span`
  margin-left: 5px;
  visibility: hidden;
`

export const Entry = styled.div`
  font-size: 1.3em;
  margin-bottom: 1em;
  color: ${props => setLightness(0.52, setSaturation(0.2, props.fg))};

  &:hover {
    ${Desc} {
      visibility: visible;
      color: ${props => setLightness(0.52, setSaturation(0.1, props.fg))};
      font-style: italic;
      &:before {
        content: '⁝';
      }
    }

    cursor: pointer;
    color: ${props => setLightness(0.6, setSaturation(0.3, props.fg))};
  }
`

export const Divider = styled.div`
  border-bottom: 1px solid grey;
  margin: 2em 0;
`
