import React from 'react'

import { useMedia } from '@/hooks'
import { ICON_CMD } from '@/config'

import {
  Wrapper,
  HeaderStatesIcon,
  SettingIcon,
  Divider,
} from './styles/addons'
import { previewState, openC11NPanel } from './logic'

const AddOns = ({ mstStateTestId }) => {
  const { mobile } = useMedia()

  return (
    <Wrapper>
      {!mobile && (
        <div onClick={() => previewState('mst-state')}>
          <HeaderStatesIcon testId={mstStateTestId} />
        </div>
      )}
      <div onClick={openC11NPanel}>
        <SettingIcon src={`${ICON_CMD}/magic-setting.svg`} />
      </div>
      <Divider>&nbsp;</Divider>
    </Wrapper>
  )
}

export default React.memo(AddOns)
