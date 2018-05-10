//
import styled from 'styled-components'
import ReactSVG from 'react-svg'

export const InputFooter = styled.div`
  display: flex;
  padding: 0 10px;
  margin-bottom: 10px;
  margin-left: 20px;
  margin-right: 15px;
`

export const InputHelper = styled.div`
  flex-grow: 1;
  display: flex;
`
export const HelperIcon = styled(ReactSVG)`
  fill: #b7cfd0;
  width: 20px;
  height: 20px;
  margin-right: 8px;

  &:hover {
    fill: #51abb2;
    cursor: pointer;
  }
`

export const InputSubmit = styled.div``
