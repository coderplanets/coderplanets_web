import React from 'react'

import { Wrapper, HeaderStatesIcon, ThemeDot, Divider } from './styles/addons'
import { previewState, queryDoraemon } from './logic'

const AddOns = ({ mstStateTestId }) => (
  <Wrapper>
    {/*
        <Button size="small" type="primary" ghost onClick={logic.upgradeHepler}>
        upgrade
        </Button>
        &nbsp;&nbsp;&nbsp;
        <DividerIcon src={`${ICON_CMD}/more.svg`} />
      */}
    <div onClick={() => previewState('mst-state')}>
      <HeaderStatesIcon testid={mstStateTestId} />
    </div>
    <ThemeDot onClick={() => queryDoraemon('/theme/')} />
    <Divider>&nbsp;</Divider>
  </Wrapper>
)

export default React.memo(AddOns)
