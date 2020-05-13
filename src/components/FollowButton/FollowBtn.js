import React from 'react'

import { ICON_CMD } from '@/config'
import { Button } from '@/components/Buttons'

import { BtnWrapper, WatchIcon, LoadingIcon } from './styles'

const FollowBtn = ({ size, loading, onClick }) => {
  return (
    <React.Fragment>
      {loading ? (
        <Button size={size} type="primary" ghost>
          <BtnWrapper>
            <LoadingIcon src={`${ICON_CMD}/reaction_loading.svg`} />
            <div>关注中...</div>
          </BtnWrapper>
        </Button>
      ) : (
        <Button size={size} type="primary" onClick={onClick}>
          <BtnWrapper>
            <WatchIcon src={`${ICON_CMD}/plus_follow.svg`} />
            <div>关 注</div>
          </BtnWrapper>
        </Button>
      )}
    </React.Fragment>
  )
}

export default React.memo(FollowBtn)
