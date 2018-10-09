import styled from 'styled-components'

import Img from '../../../components/Img'
import { theme } from '../../../utils'

export const TableWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
// background: ${theme('preview.articleBg')};

export const UserWrapper = styled.div`
  display: flex;
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
`

export const UserBrief = styled.div`
  margin-left: 18px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  display: flex;
  align-items: center;
`
export const Nickname = styled.div`
  font-size: 1rem;
`
export const Location = styled.div`
  color: ${theme('thread.articleDigest')};
  margin-left: 10px;
  display: flex;
  align-items: center;
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
