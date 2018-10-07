import styled from 'styled-components'

import Img from '../../Img'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 35px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 6px;
`
export const ReactionWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
`
export const Divider = styled.div`
  border-right: 1px solid;
  border-color: ${theme('banner.desc')};
  height: 15px;
  margin-left: 8px;
  opacity: 0.8;
  margin-right: 6px;
`
export const Reaction = styled.div`
  align-items: center;
  display: flex;
`
export const PlainAction = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
`
export const ReactionAction = styled(PlainAction)`
  background-color: ${({ active }) =>
    active ? theme('article.reactionHoverBg') : ''};
  padding: ${({ active }) => (active ? '2px 5px' : '2px 3px')};
  &:hover {
    cursor: pointer;
    font-weight: bold;
    background: ${theme('article.reactionHoverBg')};
  }
`
export const ReactionName = styled.div`
  color: ${theme('article.reactionTitle')};
  font-size: 0.9rem;
`
export const PlainUserNum = styled.div`
  color: ${theme('article.reactionTitle')};
  font-size: 1rem;
  margin-left: 2px;
`
export const ReactionUserNum = styled(PlainUserNum)`
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: ${theme('contrastFg')};
  }
`
const ReactionIcon = styled(Img)`
  fill: ${theme('article.reactionTitle')};
  width: 24px;
  height: 24px;
  display: block;
  margin-right: 2px;
`
export const CollectIcon = styled(ReactionIcon)`
  margin-top: -2px;
`
export const LikeIcon = styled(ReactionIcon)`
  margin-top: -5px;
  width: 22px;
  height: 22px;
`
