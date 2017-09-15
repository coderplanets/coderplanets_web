import styled from 'styled-components'

const Content = styled.div`
  padding-left: 65px;
  position: relative;
  height: 100vh;
  background: ${props => props.theme.contentBg};
  transition: background-color 0.3s;
`

export default Content
