import React from 'react'

import { ICON_CMD } from '@config'
import Tooltip from '@components/Tooltip'

import { onLogin, onLogout, previewAccount } from './logic'

import {
  Wrapper,
  PopMenu,
  MenuItem,
  MenuLink,
  LoginBadge,
  LoginDesc,
  LoginName,
  DefaultUserIcon,
  LogoutItem,
  AvatarIcon,
  MenuDivider,
} from './styles/user_account'

const UserAccount = ({ isLogin, accountInfo }) => (
  <React.Fragment>
    {isLogin ? (
      <Tooltip
        placement="bottomLeft"
        trigger="hover"
        content={
          <PopMenu>
            <LoginBadge>
              <LoginDesc>使用 Github 登陆:</LoginDesc>
              <LoginName>{accountInfo.login}</LoginName>
            </LoginBadge>
            <MenuDivider />
            <MenuItem onClick={previewAccount.bind(this, 'account')}>
              主页面板
            </MenuItem>
            <MenuLink
              href={`/user/${accountInfo.login}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              我的主页
            </MenuLink>
            <MenuLink
              href={`/user/${accountInfo.login}?tab=favorites`}
              rel="noopener noreferrer"
              target="_blank"
            >
              我的收藏
            </MenuLink>
            <MenuLink
              href={`/user/${accountInfo.login}?tab=billing`}
              rel="noopener noreferrer"
              target="_blank"
            >
              我的账单
            </MenuLink>
            <MenuDivider />
            <MenuLink
              href={`/user/${accountInfo.login}?tab=settings`}
              rel="noopener noreferrer"
              target="_blank"
            >
              设置
            </MenuLink>
            <MenuItem>帮助</MenuItem>
            <LogoutItem onClick={onLogout}>登出</LogoutItem>
          </PopMenu>
        }
      >
        <Wrapper>
          <AvatarIcon src={accountInfo.avatar} />
        </Wrapper>
      </Tooltip>
    ) : (
      <Wrapper onClick={onLogin}>
        <DefaultUserIcon src={`${ICON_CMD}/default_user.svg`} />
      </Wrapper>
    )}
  </React.Fragment>
)

export default React.memo(UserAccount)
