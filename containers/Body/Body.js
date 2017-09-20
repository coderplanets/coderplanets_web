import styled from 'styled-components'

const Content = styled.div`
  padding-left: 65px;
  position: relative;
  height: 100vh;
  background: ${props => props.theme.body_bg};
  transition: background-color 0.3s;
`

export default Content
