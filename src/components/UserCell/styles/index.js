import styled from 'styled-components'

import { cs } from '@/utils'

export const UserCellWrapper = styled.div`
  ${cs.flex('justify-start')};
  align-items: center;
  margin-left: 10px;
`
export const Avatar = styled.img`
  ${cs.circle('38px')};
`
export const UserInfo = styled.div`
  ${cs.flexColumn('align-start')};
  margin-left: 10px;
`

export const NickName = styled.div`
  font-size: 1rem;
  color: #a0bbbe;
  font-weight: bold;
`

export const Bio = styled.div`
  color: #a0bbbe;
  margin-top: -3px;

  ${cs.truncate('200px')};
`
