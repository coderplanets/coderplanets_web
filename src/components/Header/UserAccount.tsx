import { Fragment, FC, memo } from 'react'
import { useRouter } from 'next/router'

import { ICON } from '@/config'
import { ROUTE } from '@/constant'
import { useAccount } from '@/stores/init'

import Tooltip from '@/components/Tooltip'
import Button from '@/components/Buttons/Button'
import { Space } from '@/components/Common'

// import { onLogin, onLogout, previewAccount } from './logic'

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

const UserAccount: FC = () => {
  const router = useRouter()
  const account = useAccount()

  return (
    <Fragment>
      {account.isLogin ? (
        <Tooltip
          placement="bottom-end"
          trigger="click"
          hideOnClick={false}
          content={
            <PopMenu>
              <LoginBadge>
                <LoginDesc>Github 登陆:</LoginDesc>
                <LoginName>{account.user.login}</LoginName>
              </LoginBadge>
              <MenuDivider />
              <MenuLink
                href={`/user/${account.user.login}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                我的主页
              </MenuLink>
              <MenuLink
                href={`/user/${account.user.login}?tab=favorites`}
                rel="noopener noreferrer"
                target="_blank"
              >
                我的收藏
              </MenuLink>
              <MenuLink
                href={`/user/${account.user.login}?tab=billing`}
                rel="noopener noreferrer"
                target="_blank"
              >
                我的账单
              </MenuLink>
              <MenuDivider />
              <MenuLink
                href={`/user/${account.user.login}?tab=settings`}
                rel="noopener noreferrer"
                target="_blank"
              >
                设置
              </MenuLink>
              <MenuItem>帮助</MenuItem>
              <LogoutItem onClick={() => console.log('onLogout')}>
                登出
              </LogoutItem>
            </PopMenu>
          }
        >
          <Wrapper testid="header-login-user">
            <AvatarIcon src={account.user.avatar} />
          </Wrapper>
        </Tooltip>
      ) : (
        <Wrapper
          testid="header-unlogin-user"
          onClick={() => console.log('todo onLogin')}
        >
          <DefaultUserIcon />
        </Wrapper>
      )}

      <Space left={12} />
      <Button
        size="tiny"
        type="primary"
        ghost
        onClick={() => router.push(`/${ROUTE.MEMBERSHIP}`)}
      >
        <MembershipHint>升舱</MembershipHint>
      </Button>
    </Fragment>
  )
}

export default memo(UserAccount)
