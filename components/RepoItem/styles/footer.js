import styled from 'styled-components'

import Img from '../../Img'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  margin-left: 10px;
  margin-top: 12px;
  align-items: center;
`

export const Contributors = styled.div`
  display: flex;
  flex-grow: 1;
`
export const Builder = styled.div``

export const Avatar = styled(Img)`
  width: 20px;
  height: 20px;
  border-radius: 3px;
  margin-right: 6px;
  opacity: 0.8;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`
export const PopoverInfo = styled.div`
  padding: 10px;
  padding-bottom: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const PopAvatar = styled(Img)`
  width: 80px;
  height: 80px;
  border-radius: 3px;
`
export const PopLink = styled.a`
  color: ${theme('thread.articleTitle')};
  margin-top: 5px;
  &:hover {
    text-decoration: underline;
    color: ${theme('thread.articleTitle')};
  }
`
export const PublishInfo = styled.div`
  color: ${theme('thread.articleDigest')};
  display: flex;
  font-size: 0.85rem;
  margin-right: 10px;
  align-items: center;
  align-self: flex-end;
`
