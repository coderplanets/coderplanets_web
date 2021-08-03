import { FC, memo } from 'react'

import { ICON_CMD } from '@/config'
import { EVENT } from '@/constant'

import { send } from '@/utils/helper'

import UserAccount from './UserAccount'

import {
  Wrapper,
  SettingIcon,
  Divider,
  Operations,
  Search,
  HeaderSearchIcon,
} from './styles/addons'

const AddOns: FC = () => {
  // TODO: move the login logic to MailBox itself
  // useEffect(() => {
  //   if (isLogin) {
  //     MailBox = dynamic(() => import('@/containers/tool/MailBox'), {
  //       /* eslint-disable react/display-name */
  //       loading: () => <div />,
  //       ssr: false,
  //     })
  //   }
  // }, [isLogin])

  return (
    <Wrapper>
      <div onClick={() => console.log('todo openC11NPanel')}>
        <SettingIcon src={`${ICON_CMD}/magic-setting.svg`} />
      </div>
      <Divider>&nbsp;</Divider>
      <Operations>
        <Search
          onClick={() => send(EVENT.QUERY_DORAMON)}
          testid="header-search"
        >
          <HeaderSearchIcon testid="header-search-icon" />
        </Search>

        {/* {MailBox && <MailBox />} */}
        <UserAccount />
      </Operations>
    </Wrapper>
  )
}

export default memo(AddOns)
