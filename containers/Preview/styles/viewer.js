import styled from 'styled-components'

export const Wrapper = styled.div.attrs(({ id }) => ({
  id,
}))`
  height: calc(100% - 10px);
  width: 100%;
`

export const holder = 1
