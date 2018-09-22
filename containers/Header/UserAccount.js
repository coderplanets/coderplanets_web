import React from 'react'

import { ICON_CMD } from '../../config/assets'
import * as logic from './logic'

import { Wrapper, DefaultUserIcon, AvatarIcon } from './styles/user_account'

const UserAccount = ({ isLogin, accountInfo }) => {
  return (
    <React.Fragment>
      {isLogin ? (
        <Wrapper onClick={logic.previewAccount.bind(this, 'account')}>
          <AvatarIcon src={accountInfo.avatar} />
        </Wrapper>
      ) : (
        <Wrapper onClick={logic.login}>
          <DefaultUserIcon src={`${ICON_CMD}/default_user.svg`} />
        </Wrapper>
      )}
    </React.Fragment>
  )
}

export default UserAccount
