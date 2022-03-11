import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flex('align-center')};

  margin-left: 10px;
  margin-top: 12px;
`

export const Contributors = styled.div`
  ${css.flexGrow()};

  ${css.media.mobile`
    max-width: 60%;
    ${css.cutRest('160px')};
  `};
`
export const Builder = styled.div``

export const Avatar = styled(Img)`
  ${css.size(20)};
  border-radius: 3px;
  margin-right: 6px;
  opacity: 0.8;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`
export const PopoverInfo = styled.div`
  ${css.flexColumn('align-center')};
  padding: 10px;
  padding-bottom: 5px;
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
  ${css.flex('align-center')};

  color: ${theme('thread.articleDigest')};
  align-self: flex-end;
  font-size: 0.85rem;
  margin-right: 10px;
`
