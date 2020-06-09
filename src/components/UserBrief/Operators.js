import React from 'react'

import { ICON_CMD } from '@/config'
import { withGuardian } from '@/hoc'

import {
  Wrapper,
  EditIcon,
  EditWrapper,
  LogoutBtn,
  LogoutIcon,
  LogoutText,
} from './styles/operators'

const Operators = ({ onEdit, onLogout }) => (
  <Wrapper>
    <EditWrapper onClick={onEdit}>
      <EditIcon src={`${ICON_CMD}/edit.svg`} />
    </EditWrapper>
    <LogoutBtn onClick={onLogout}>
      <LogoutIcon src={`${ICON_CMD}/logout.svg`} />
      <LogoutText>退出登陆?</LogoutText>
    </LogoutBtn>
  </Wrapper>
)

export default withGuardian(Operators)
