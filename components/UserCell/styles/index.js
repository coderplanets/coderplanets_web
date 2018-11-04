import styled from 'styled-components'

import { cs } from '../../../utils'

export const UserCellWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 10px;
`
export const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 100%;
`
export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  align-items: start;
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
