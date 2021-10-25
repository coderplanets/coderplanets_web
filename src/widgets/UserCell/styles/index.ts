import styled from 'styled-components'

import css from '@/utils/css'

export const UserCellWrapper = styled.div`
  ${css.flex('justify-start', 'align-center')};
  margin-left: 10px;
`
export const Avatar = styled.img`
  ${css.circle(38)};
`
export const UserInfo = styled.div`
  ${css.flexColumn('align-start')};
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

  ${css.cutRest('200px')};
`
