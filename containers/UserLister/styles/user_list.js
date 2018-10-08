import styled from 'styled-components'

import Img from '../../../components/Img'
import { theme } from '../../../utils'

export const TableWrapper = styled.div``
// background: ${theme('preview.articleBg')};

export const UserWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid;
  border-bottom-color: ${theme('preview.divider')};
`
export const UserAvatar = styled(Img)`
  width: 50px;
  height: 50px;
  border-radius: 4px;
  display: block;
`

export const UserBrief = styled.div`
  margin-left: 18px;
  flex-grow: 1;
`

export const Nickname = styled.div`
  color: ${theme('banner.desc')};
  font-weight: bold;
`

export const Bio = styled.div`
  width: 500px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${theme('banner.desc')};
`
export const Location = styled.div`
  color: ${theme('banner.desc')};
`
export const Action = styled.div`
  width: 100px;
`
