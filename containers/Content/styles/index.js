import styled from 'styled-components'

// import { theme } from '../../../utils'

// visibility: ${props => (props.active === props.name ? 'visible' : 'hidden')};

export const Hidder = styled.div`
  display: ${props => (props.active === props.name ? 'block' : 'none')};
`
export const Wrapper = styled.div``

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
