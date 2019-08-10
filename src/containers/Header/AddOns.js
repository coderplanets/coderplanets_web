import React from 'react'

import { Wrapper, HeaderStatesIcon, ThemeDot, Divider } from './styles/addons'
import { previewState, queryDoraemon } from './logic'

const AddOns = () => (
  <Wrapper>
    {/*
        <Button size="small" type="primary" ghost onClick={logic.upgradeHepler}>
        upgrade
        </Button>
        &nbsp;&nbsp;&nbsp;
        <DividerIcon src={`${ICON_CMD}/more.svg`} />
      */}
    <div onClick={previewState.bind(this, 'mst-state')}>
      <HeaderStatesIcon />
    </div>
    <ThemeDot onClick={queryDoraemon.bind(this, '/theme/')} />
    <Divider>&nbsp;</Divider>
  </Wrapper>
)

export default AddOns
