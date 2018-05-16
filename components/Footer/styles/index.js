import styled from 'styled-components'
import { smokey } from '../../../utils'

const link = styled.a`
  text-decoration: none;
  font-weight: bolder;
  color: #9fc0c5;
  transition: color 0.3s;
  &:hover {
    text-decoration: underline;
    color: #5c868b;
  }
`
export const Support = styled.div`
  font-weight: bolder;
  color: #9fc0c5;
  transition: color 0.3s;
  &:hover {
    cursor: pointer;
    color: #5c868b;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: -18%;
`
export const BaseInfo = styled.div`
  display: flex;
  margin-top: 20px;
`
export const BeianInfo = styled.div`
  margin-bottom: 20px;
`

export const Divider = styled.div`
  margin-left: 12px;
  margin-right: 12px;
  color: #b9cace;
`

export const GitSource = styled.div`
  margin-top: 2px;
  ${smokey};
`
export const Powerby = styled.div`
  color: #b7c6d0;
`

export const PowerbyLink = link.extend``
export const About = link.extend``
export const Beian = link.extend``
