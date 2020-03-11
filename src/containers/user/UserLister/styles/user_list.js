import styled from 'styled-components'

import Img from '@Img'
import { theme, cs } from '@utils'

export const TableWrapper = styled.div`
  ${cs.flex()};
  flex-wrap: wrap;
`
// background: ${theme('preview.articleBg')};

export const UserWrapper = styled.div`
  ${cs.flex()};
  width: 48%;
  margin-bottom: 10px;
  margin-right: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid;
  border-bottom-color: ${theme('preview.divider')};
`
export const UserAvatar = styled(Img)`
  width: 55px;
  height: 55px;
  border-radius: 4px;
  display: block;

  ${cs.media.mobile`
    width: 30px;
    height: 30px;
`};
`
export const UserBrief = styled.div`
  ${cs.flexColumnGrow('justify-between')};
  margin-left: 18px;
`
export const Title = styled.div`
  ${cs.flex('align-center')};
  color: ${theme('thread.articleTitle')};

  ${cs.media.tablet`
    ${cs.flexColumn('align-start')};
  `};
`
export const Nickname = styled.div`
  font-size: 1rem;
`
export const Location = styled.div`
  ${cs.flex('align-center')};
  color: ${theme('thread.articleDigest')};
  margin-left: 10px;

  ${cs.media.tablet`
    ${cs.truncate('80px')};
    margin-left: 0;
    margin-bottom: 3px;
  `};

  ${cs.media.mobile`
    ${cs.truncate('60px')};
    margin-left: 0;
    margin-bottom: 3px;
  `};
`
export const GeoIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  width: 13px;
  height: 13px;
  display: block;
  margin-right: 2px;
`
export const Action = styled.div`
  color: ${theme('thread.articleDigest')};
  width: 100px;
`
