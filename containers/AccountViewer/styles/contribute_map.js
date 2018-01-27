import styled from 'styled-components'

export const Wrapper = styled.div``

export const TitleWrapper = styled.div`
  display: flex;
`

export const HelpText = styled.div`
  color: #e8e7e7;
  margin-top: 2px;
  &:hover {
    color: #81a5a8;
    cursor: pointer;
  }
  ${TitleWrapper}:hover & {
    color: #81a5a8;
  }
  transition: color 0.2s;
`
export const Title = styled.div`
  font-size: 1.2em;
  color: #5c868b;
  margin-bottom: 7px;
  flex-grow: 1;
`

export const DotWrapper = styled.div`
  margin-top: 4px;
  display: flex;
  justify-content: flex-end;
`
export const DotText = styled.div`
  font-size: 0.9em;
  color: #e8e7e7;
  ${DotWrapper}:hover & {
    color: #7fa4a7;
  }
`
export const DotList = styled.div`
  margin-left: 5px;
  margin-right: 3px;
  display: flex;
`

export const ColorDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 3px;
  margin-top: 2px;
  margin-right: 2px;
  background-color: ${props => (props.color ? props.color : 'tomato')};
`
