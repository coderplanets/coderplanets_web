import React from 'react'

import { ICON } from '@/config'

import Tooltip from '@/components/Tooltip'
import { Button } from '@/components/Buttons'

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
  UpgradeHint,
} from './styles/user_account'

const UserAccount = ({ isLogin, accountInfo }) => (
  <React.Fragment>
    {isLogin ? (
      <Tooltip
        placement="bottom-start"
        trigger="click"
        hideOnClick={false}
        content={
          <PopMenu>
            <LoginBadge>
              <LoginDesc>使用 Github 登陆:</LoginDesc>
              <LoginName>{accountInfo.login}</LoginName>
            </LoginBadge>
            <MenuDivider />
            <MenuItem onClick={() => previewAccount('account')}>
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
        <Wrapper testId="header-login-user">
          <AvatarIcon src={accountInfo.avatar} />
        </Wrapper>
      </Tooltip>
    ) : (
      <Wrapper testId="header-unlogin-user" onClick={onLogin}>
        <DefaultUserIcon src={`${ICON}/user/account-solid.svg`} />
      </Wrapper>
    )}

    <UpgradeHint>
      <Button size="tiny" type="primary" ghost>
        升&nbsp;级
      </Button>
    </UpgradeHint>
  </React.Fragment>
)

export default React.memo(UserAccount)
