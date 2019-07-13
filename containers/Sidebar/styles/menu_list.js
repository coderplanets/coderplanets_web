import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 0px;
  left: 0;
  position: relative;
  width: 260px;
  height: 100%;
  // height: 95vh;
  // overflow-y: scroll;
  transition: left 0.2s;
`
export const ScrollWrapper = styled.div.attrs(() => ({
  id: 'sidebar-scroller',
}))`
  // max-height: calc(100% - 20px);
  // height 500px;
  height: calc(100% - 20px);
`
