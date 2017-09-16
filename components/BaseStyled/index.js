import styled from 'styled-components'

export const Center = styled.div`
  /* display: flex;*/
  /* align-items: center;*/
  /* justify-content: center;*/
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`
export const HorizontalCenter = styled.div`text-align: center;`

export const Title = styled.div`
  font-size: 3vh;
  color: ${props => props.theme.font};
  transition: color 0.3s;
`
export const Ul = styled.ul`
  list-style: none; /* Remove list bullets */
  padding: 0;
  margin: 0;
  color: ${props => props.theme.font};
`
export const Li = styled.li`
  padding-left: 16px;
  &:before {
    content: '•'; /* Insert content that looks like bullets */
    padding-right: 8px;
    color: ${props => props.theme.font};
  }
`

export const Mark = styled.span`backgroun: lightgrey;`
