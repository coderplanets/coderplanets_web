import styled from 'styled-components'

export const Wrapper = styled.div`
  left: 0;
  position: relative;
  height: 100%;
  transition: left 0.2s;
`
export const ScrollWrapper = styled.div.attrs(({ id }) => ({
  id,
}))`
  height: calc(100% - 20px);
`
