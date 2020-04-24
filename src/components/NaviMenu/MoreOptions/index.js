/*
 *
 * NaviMenu
 *
 */

import React from 'react'
// import T from 'prop-types'

import { buildLog } from '@utils'
import { ICON_CMD } from '@config'

// import { SpaceGrow } from '@components/Common'

import { Wrapper, Block, Icon, Title } from '../styles/more_options'

/* eslint-disable-next-line */
const log = buildLog('c:NaviMenu:index')

const MoreOptions = () => {
  return (
    <Wrapper>
      <Block>
        <Icon src={`${ICON_CMD}/navi/navi_add.svg`} />
        <Title>添加条目</Title>
      </Block>
      <Block>
        <Icon src={`${ICON_CMD}/navi/navi_fix.svg`} />
        <Title>纠错 / 侵权</Title>
      </Block>
      <Block>
        <Icon src={`${ICON_CMD}/navi/navi_info.svg`} />
        <Title>关于</Title>
      </Block>
    </Wrapper>
  )
}

MoreOptions.propTypes = {}

MoreOptions.defaultProps = {}

export default React.memo(MoreOptions)
