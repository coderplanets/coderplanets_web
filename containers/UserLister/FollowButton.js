import React from 'react'
import { Button } from 'antd'

import { ICON_CMD } from '../../config'
import { Popover } from '../../components'

import {
  BtnWrapper,
  WatchIcon,
  WatchedIcon,
  Popinfo,
} from './styles/follow_button'

const FollowButton = ({ user }) => (
  <React.Fragment>
    {user.viewerHasFollowed ? (
      <Popover
        placement="bottom"
        trigger="hover"
        content={<Popinfo>点击取消关注</Popinfo>}
      >
        <Button size="small" type="primary">
          <BtnWrapper>
            <WatchedIcon src={`${ICON_CMD}/check2.svg`} />
            <div>已关注</div>
          </BtnWrapper>
        </Button>
      </Popover>
    ) : (
      <Button size="small" type="primary" ghost>
        <BtnWrapper>
          <WatchIcon src={`${ICON_CMD}/watch_user.svg`} />
          <div>关注</div>
        </BtnWrapper>
      </Button>
    )}
  </React.Fragment>
)

export default FollowButton
