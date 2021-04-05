import React from 'react'

import { ICON_CMD } from '@/config'

import { Wrapper, SettingIcon, Divider } from './styles/addons'
import { openC11NPanel } from './logic'

const AddOns = () => {
  return (
    <Wrapper>
      <div onClick={openC11NPanel}>
        <SettingIcon src={`${ICON_CMD}/magic-setting.svg`} />
      </div>
      <Divider>&nbsp;</Divider>
    </Wrapper>
  )
}

export default React.memo(AddOns)
