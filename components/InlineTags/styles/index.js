import styled from 'styled-components'

/* import { Img } from '../..' */
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  margin-left: 10px;
`
export const Tag = styled.div`
  display: flex;
  align-items: center;
  margin-top: -6px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTag')};
  opacity: 0.8;
  font-size: 0.9rem;
  margin-top: -1px;
`
export const Dot = styled.div`
  width: 10px;
  height: 10px;
  margin-right: 4px;
  border-radius: 50%;
  background-color: ${({ color }) => color};

  opacity: ${theme('tags.dotOpacity')};
`
