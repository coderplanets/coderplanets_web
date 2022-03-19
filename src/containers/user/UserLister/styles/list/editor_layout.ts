import styled from 'styled-components'

import Img from '@/Img'
import css, { theme } from '@/utils/css'
import CitySVG from '@/icons/City'

export const Wrapper = styled.div``

export const UserWrapper = styled.div`
  ${css.flex()};
  width: 100%;
  margin-bottom: 10px;
  margin-right: 5px;
  padding: 20px 10px;
  border-bottom: 1px solid;
  border-bottom-color: ${theme('drawer.divider')};
`
export const UserAvatar = styled(Img)`
  ${css.size(55)};
  border-radius: 42%;
  margin-top: 5px;

  ${css.media.mobile`
    ${css.size(30)};
`};
`
export const UserBrief = styled.div`
  ${css.flexColumnGrow('justify-between')};
  margin-left: 24px;
`
export const Title = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleTitle')};

  ${css.media.tablet`
    ${css.flexColumn('align-start')};
  `};
`
export const Desc = styled.div`
  font-size: 15px;
  margin-top: 2px;
  margin-bottom: 5px;
  color: ${theme('thread.articleDigest')};
`
export const Nickname = styled.a`
  color: ${theme('thread.articleTitle')};
  text-decoration: none;
  font-size: 16px;

  &:hover {
    color: ${theme('thread.articleTitle')};
    text-decoration: underline;
  }
`
export const Location = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleDigest')};
  margin-left: 10px;
  opacity: 0.8;

  ${css.media.tablet`
    ${css.cutRest('80px')};
    margin-left: 0;
    margin-bottom: 3px;
  `};

  ${css.media.mobile`
    ${css.cutRest('60px')};
    margin-left: 0;
    margin-bottom: 3px;
  `};
`
export const City = styled.div`
  ${css.cutRest('200px')};
  ${css.media.tablet`
    ${css.cutRest('80px')};
    margin-left: 0;
    margin-bottom: 3px;
  `};

  ${css.media.mobile`
    ${css.cutRest('60px')};
    margin-left: 0;
    margin-bottom: 3px;
  `};
`
export const CityIcon = styled(CitySVG)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(13)};
  margin-right: 2px;
`
export const Action = styled.div`
  color: ${theme('thread.articleDigest')};
  width: 100px;
  margin-top: 5px;
`
