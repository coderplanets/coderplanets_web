import styled from 'styled-components'

// import { Img } from '../../../components'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  padding: 5px 12px;
  padding-top: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const Item = styled.div`
  display: flex;
  align-items: center;
  color: ${theme('thread.articleTitle')};
  margin-bottom: 8px;
  &:hover {
    font-weight: bold;
    cursor: pointer;
  }
`
export const DotWrapper = styled.div`
  display: ${({ active }) => (active ? 'block' : 'none')};
`
