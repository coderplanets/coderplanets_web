import React from 'react'

import { ICON_CMD } from '../../config'

import {
  Wrapper,
  EditIcon,
  EditWrapper,
  LogoutBtn,
  LogoutIcon,
  LogoutText,
} from './styles/operators'

const Opertors = ({ show, onEdit, onLogout }) => (
  <Wrapper>
    <EditWrapper show={show} onClick={onEdit}>
      <EditIcon src={`${ICON_CMD}/edit.svg`} />
    </EditWrapper>
    <LogoutBtn onClick={onLogout}>
      <LogoutIcon src={`${ICON_CMD}/logout.svg`} />
      <LogoutText>退出登陆?</LogoutText>
    </LogoutBtn>
  </Wrapper>
)

export default Opertors
