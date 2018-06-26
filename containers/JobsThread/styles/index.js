import styled from 'styled-components'

import { Button, Img } from '../../../components'
import { theme, Animate } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  max-width: 1400px;
`

export const LeftPadding = styled.div`
  width: 4vw;
`
export const RightPadding = styled.div`
  width: 4vw;
`
export const LeftPart = styled.div`
  flex-grow: 1;
  width: 100%;
`

export const RightPart = styled.div`
  width: 20vw;
  margin-left: 30px;
`

/* fill: ${theme('shell.searchIcon')}; */
export const WritePostBtn = styled(Button)`
  margin-top: 8px;
  width: 100%;
  max-width: 180px;
  margin-left: 8%;
`
export const FilterWrapper = styled.div`
  margin-bottom: 8px;
  margin-left: 8px;
  display: ${({ show }) => (show ? 'flex' : 'none')};
`
export const FilterResultHint = styled.div`
  margin-top: 4px;
  margin-right: 10px;
  color: ${theme('thread.filterResultHint')};
`

/* border-bottom: 1px solid #ececec; */
export const TagDivider = styled.div`
  width: 80%;
  margin-top: 40px;
  margin-bottom: 30px;
  margin-left: 8%;
`
export const PostWrapper = styled.div`
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
export const PostMain = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`

export const PostTopHalf = styled.div`
  display: flex;
`
export const PostSecondHalf = styled.ul`
  margin-left: 11px;
  margin-top: -10px;
`
export const PostAvatar = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 100%;
`

export const PostBreif = styled.div`
  display: flex;
  flex-grow: 1;
  margin-left: 10px;
  color: ${theme('thread.articleTitle')};
`

export const PostTitle = styled.div`
  margin-bottom: 10px;
  font-size: 1rem;
  @media (max-width: 1450px) {
    max-width: 500px;
  }
  @media (max-width: 1250px) {
    max-width: 450px;
  }
  @media (max-width: 1100px) {
    max-width: 350px;
  }
`
export const PostTitleTagDot = styled.span`
  width: 10px;
  height: 10px;
  margin-right: 3px;
  border-radius: 50%;
  background-color: #9cd090;
  display: inline-block;
`

export const PostTitleLink = styled.div`
  position: relative;
  font-size: 0.9rem;
  margin-top: 2px;
  color: #a8b8c6;
  margin-left: 10px;
  opacity: 0.8;
`
export const PostTitleTag = styled.div`
  font-size: 0.9rem;
  color: #a8b8c6;
  margin-left: 10px;
  margin-top: 2px;
  opacity: 0.8;
`
export const LinkIcon = styled(Img)`
  position: absolute;
  top: 6px;
  left: -5px;
  width: 12px;
  height: 12px;
`

export const PostExtra = styled.li`
  display: inline;
  opacity: 0.7;
  transition: opacity 0.2s;
  font-size: 0.9rem;
`

export const PostBodyBreif = styled.li`
  margin-top: 5px;
  color: ${theme('thread.articleBrief')};
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
  padding: 3px;

  ${PostWrapper}:hover & {
    animation: ${Animate.pulse} 0.3s linear;
  }
`

export const CompanyTitle = styled.div`
  font-size: 1rem;
  text-align: center;
  background: #84acaf;
  color: white;
`
