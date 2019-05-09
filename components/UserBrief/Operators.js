import React from 'react'

import { ICON_CMD } from '@config'
import withGuardian from '@components/HOC/withGuardian'

import {
  Wrapper,
  EditIcon,
  EditWrapper,
  LogoutBtn,
  LogoutIcon,
  LogoutText,
} from './styles/operators'

const Opertors = ({ onEdit, onLogout }) => (
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

export default withGuardian(Opertors)
