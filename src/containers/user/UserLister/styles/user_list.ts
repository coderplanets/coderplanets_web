import styled from 'styled-components'

import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const TableWrapper = styled.div`
  ${css.flex()};
  flex-wrap: wrap;
`
// background: ${theme('drawer.articleBg')};

export const UserWrapper = styled.div`
  ${css.flex()};
  width: 48%;
  margin-bottom: 10px;
  margin-right: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid;
  border-bottom-color: ${theme('drawer.divider')};
`
export const UserAvatar = styled(Img)`
  ${css.size(55)};
  border-radius: 4px;

  ${css.media.mobile`
    ${css.size(30)};
`};
`
export const UserBrief = styled.div`
  ${css.flexColumnGrow('justify-between')};
  margin-left: 18px;
`
export const Title = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleTitle')};

  ${css.media.tablet`
    ${css.flexColumn('align-start')};
  `};
`
export const Nickname = styled.div`
  font-size: 1rem;
`
export const Location = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleDigest')};
  margin-left: 10px;

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
export const GeoIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(13)};
  margin-right: 2px;
`
export const Action = styled.div`
  color: ${theme('thread.articleDigest')};
  width: 100px;
`
