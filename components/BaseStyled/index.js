import styled from 'styled-components'
import { theme } from '@utils'

export const Title = styled.div`
  font-size: 3vh;
  color: ${theme('font')};
  transition: color 0.3s;
`
export const Ul = styled.ul`
  list-style: none; /* Remove list bullets */
  padding: 0;
  margin: 0;
  color: ${theme('font')};
`
export const Li = styled.li`
  padding-left: 16px;
  margin-bottom: 8px;
  &:before {
    content: '•'; /* Insert content that looks like bullets */
    padding-right: 8px;
    color: ${theme('font')};
  }
`

export const Mark = styled.span`
  backgroun: lightgrey;
`

export const Margin = styled.div`
  margin-top: ${({ top }) => top || 0};
  margin-bottom: ${({ bottom }) => bottom || 0};
  margin-left: ${({ left }) => left || 0};
  margin-right: ${({ right }) => right || 0};
`

export const Space = styled.span`
  margin-left: ${({ left }) => left || 0};
  margin-right: ${({ right }) => right || 0};
`
export const SpaceGrow = styled.div`
  flex-grow: 1;
`
