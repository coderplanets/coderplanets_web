import styled from 'styled-components'

export const PagiWrapper = styled.div`
  text-align: center;
  margin-top: ${props => props.top};
  margin-bottom: ${props => props.bottom};
  margin-left: ${props => props.left};
`

export const BottomMsg = styled.div`
  font-size: 1.4em;
  color: #afaeae;
  &:before {
    content: '~~';
    margin-right: 10px;
  }
  &:after {
    content: '~~';
    margin-left: 10px;
  }
`
