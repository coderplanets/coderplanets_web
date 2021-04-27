import React, { FC } from 'react'
import { useRouter } from 'next/router'

import type { TAccount } from '@/spec'
import { ICON } from '@/config'
import { ROUTE } from '@/constant'
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
  MembershipHint,
} from './styles/user_account'

type TProps = {
  isLogin: boolean
  accountInfo: TAccount
}

const UserAccount: FC<TProps> = ({ isLogin, accountInfo }) => {
  const router = useRouter()

  return (
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
              <MenuItem onClick={() => previewAccount()}>主页面板</MenuItem>
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
          <Wrapper testid="header-login-user">
            <AvatarIcon src={accountInfo.avatar} />
          </Wrapper>
        </Tooltip>
      ) : (
        <Wrapper testid="header-unlogin-user" onClick={onLogin}>
          <DefaultUserIcon src={`${ICON}/user/account-solid.svg`} />
        </Wrapper>
      )}

      <MembershipHint>
        {/* 升&nbsp;级- */}
        <Button
          size="tiny"
          type="primary"
          ghost
          onClick={() => router.push(`/${ROUTE.MEMBERSHIP}`)}
        >
          升&nbsp;级
        </Button>
      </MembershipHint>
    </React.Fragment>
  )
}

export default React.memo(UserAccount)
