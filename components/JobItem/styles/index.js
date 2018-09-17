import styled from 'styled-components'

import Img from '../../Img'
import { theme, Animate } from '../../../utils'

export const Wrapper = styled.article`
  display: flex;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 6px;
  padding-bottom: 6px;
  border-radius: 4px;
  background: ${({ current, active }) =>
    current.id === active.id ? theme('thread.articleHover') : ''};
  opacity: ${({ current, active }) =>
    active.id && current.id !== active.id ? 0.6 : 1};

  &:hover {
    cursor: pointer;
    background: ${theme('thread.articleHover')};
  }
`
export const Main = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`

export const TopHalf = styled.div`
  display: flex;
`
export const SecondHalf = styled.ul`
  margin-left: 11px;
  margin-top: -10px;
`
export const Avatar = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 100%;
`

export const Breif = styled.div`
  display: flex;
  flex-grow: 1;
  margin-left: 10px;
  color: ${theme('thread.articleTitle')};
`

export const Title = styled.div`
  margin-bottom: 10px;
  font-size: 1rem;
  @media (max-width: 1450px) {
    max-width: 560px;
  }
  @media (max-width: 1250px) {
    max-width: 450px;
  }
  @media (max-width: 1100px) {
    max-width: 350px;
  }
`
export const TitleTagDot = styled.span`
  width: 10px;
  height: 10px;
  margin-right: 3px;
  border-radius: 50%;
  background-color: #9cd090;
  display: inline-block;
`

export const TitleLink = styled.div`
  position: relative;
  font-size: 0.9rem;
  margin-top: 2px;
  color: #a8b8c6;
  margin-left: 10px;
  opacity: 0.8;
`
export const TitleTag = styled.div`
  font-size: 0.9rem;
  color: #a8b8c6;
  margin-left: 10px;
  margin-top: 2px;
  opacity: 0.8;
`
export const LinkIcon = styled(Img)`
  fill: ${theme('thread.articleLink')};
  position: absolute;
  top: 6px;
  left: -5px;
  width: 12px;
  height: 12px;
`

export const Extra = styled.li`
  display: inline;
  opacity: 0.7;
  transition: opacity 0.2s;
  font-size: 0.9rem;
`

export const BodyDigest = styled.li`
  margin-top: 5px;
  color: ${theme('thread.articleDigest')};
  margin-right: 20px;
  white-space: normal;
  display: block;
  font-size: 0.85rem;
`

export const RightInfo = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  height: 60px;
  justify-content: space-between;
  border-radius: 3px;
  align-self: center;
`

export const SalaryWrapper = styled.div`
  font-size: 1.1rem;
  color: orange;
  padding: 3px 5px;

  ${Wrapper}:hover & {
    animation: ${Animate.pulse} 0.3s linear;
  }
`

export const CompanyTitle = styled.div`
  font-size: 1rem;
  text-align: center;
  background: #84acaf;
  color: white;
`
