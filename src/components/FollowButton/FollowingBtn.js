import React from 'react'

import { ICON_CMD } from '@config'
import { Button } from '@components/Buttons'
import Tooltip from '@components/Tooltip'

import { BtnWrapper, WatchedIcon, Popinfo, LoadingIcon } from './styles'

const FollowingBtn = ({ size, loading, onClick }) => {
  return (
    <React.Fragment>
      {loading ? (
        <Button size={size} type="primary">
          <BtnWrapper>
            <LoadingIcon src={`${ICON_CMD}/reaction_loading.svg`} light />
            <div>取关中...</div>
          </BtnWrapper>
        </Button>
      ) : (
        <Tooltip
          placement="bottom"
          trigger="hover"
          content={<Popinfo>点击取消关注</Popinfo>}
        >
          <Button size={size} type="primary" ghost onClick={onClick}>
            <BtnWrapper>
              <WatchedIcon src={`${ICON_CMD}/check2.svg`} />
              <div>已关注</div>
            </BtnWrapper>
          </Button>
        </Tooltip>
      )}
    </React.Fragment>
  )
}

export default React.memo(FollowingBtn)
