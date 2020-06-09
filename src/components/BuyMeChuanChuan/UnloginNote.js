import React from 'react'

// import { ICON_CMD } from '@/config'
import { Wrapper, LoginLabel } from './styles/unlogin_note'

const UnLoginNote = ({ onLogin }) => (
  <Wrapper>
    下一步操作前, 请先
    <LoginLabel onClick={onLogin}>登录</LoginLabel>
    你的账号
  </Wrapper>
)

export default React.memo(UnLoginNote)
