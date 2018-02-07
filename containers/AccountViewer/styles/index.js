import styled from 'styled-components'

export const AccountWrapper = styled.div`
  height: 100%;
  background: #f9fcfc;
  padding: 22px;
  padding-top: 30px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`

export const AccountContent = styled.div`
  flex-grow: 1;
`

export const Divider = styled.div`
  margin-top: ${props => (props.top ? props.top : '10px')};
  margin-bottom: ${props => (props.bottom ? props.bottom : '10px')};
  border-bottom: 1px solid #f4f4f5;
`

export const ThemeWrapper = styled.div`
  margin-bottom: 5px;
  margin-top: 30%;
`
