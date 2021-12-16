import styled from 'styled-components'

import Img from '@/Img'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export { HeaderBaseInfo, BaseInfo, FloorNum } from './index'

export const Avatar = styled(Img)<{ avatarSize: number }>`
  ${({ avatarSize }) => css.circle(avatarSize)};
  opacity: ${theme('avatar.opacity')};
  margin-right: 13px;
  ${css.media.mobile`
    margin-right: 5px;
  `}
`
export const UserBase = styled.div`
  ${css.flex('align-end')};
  font-size: 15px;
  flex-grow: 1;
`
export const Nickname = styled.div`
  font-size: 15px;
  ${css.cutRest('150px')};

  ${css.media.mobile`
    ${css.cutRest('80px')};
  `}
`
export const AuthorTag = styled.div`
  font-size: 11px;
  margin-bottom: 2px;
  padding: 0 8px;
  margin-left: 10px;
  background: #023c4a;
  border-radius: 5px;
  color: ${theme('button.primary')};

  ${css.media.mobile`
    margin-left: 5px;
    padding: 0 4px;
  `}
`
export const RefToOther = styled.div`
  ${css.flex('align-center')};
  color: ${theme('comment.username')};
  margin-left: 8px;
`
export const RefLabel = styled.div`
  font-size: 12px;
  margin-top: 3px;
  opacity: 0.8;
  &:after {
    content: ': ';
  }
`
export const RefUser = styled.div`
  font-size: 15px;
  margin-left: 8px;
  ${css.cutRest('100px')};
`
export const ShortIntro = styled.div`
  color: ${theme('comment.floor')};
  ${css.cutRest('280px')};
  font-size: 13px;
  opacity: 0.8;
  margin-top: 1px;

  ${css.media.mobile`
    ${css.cutRest('200px')};
  `};
`
export const CreateDate = styled.div`
  ${css.flex('align-center')};
  color: ${theme('comment.floor')};
  font-size: 12px;
  margin-left: 2px;
  opacity: 0.8;
`
