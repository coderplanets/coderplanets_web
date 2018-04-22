import styled from 'styled-components'

import { theme } from '../../../utils'

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
  border-radius: 6px;
  padding: 1em 6em;
  padding-top: 1.5em;
  @media (max-width: 1400px) {
    padding: 1em 2em;
  }
  @media (max-width: 1200px) {
    padding: 1em 1em;
  }
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

export const Divider = styled.div`
  border-bottom: 1px solid grey;
  margin: 2em 0;
`
