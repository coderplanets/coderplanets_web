import styled from 'styled-components'

/* import { Img } from '../..' */
import { theme, cs } from '../../../utils'

export const Wrapper = styled.div`
  ${cs.flex()};
  margin-left: 10px;
`
export const Tag = styled.div`
  ${cs.flex('align-center')};
  margin-top: -8px;
  margin-right: 4px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTag')};
  opacity: 0.8;
  font-size: 0.8rem;
`
export const Dot = styled.div`
  ${cs.circle('10px')};
  margin-right: 4px;
  background-color: ${({ color }) => color};

  opacity: ${theme('tags.dotOpacity')};
`
