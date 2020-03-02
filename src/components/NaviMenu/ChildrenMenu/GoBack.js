/*
 *
 * NaviMenu
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog } from '@utils'
import { ICON_CMD } from '@config'

import { SpaceGrow } from '@components/BaseStyled'

import { Wrapper, BackIcon } from '../styles/children_menu/go_back'

/* eslint-disable-next-line */
const log = buildLog('c:GoBack:index')

/* <ActiveDot /> */
const GoBack = ({ goBack }) => {
  return (
    <Wrapper onClick={goBack}>
      <BackIcon src={`${ICON_CMD}/navi/navi_back.svg`} />
      <SpaceGrow />
      <div>返回全部</div>
    </Wrapper>
  )
}

GoBack.propTypes = {
  goBack: T.func.isRequired,
}

GoBack.defaultProps = {}

export default React.memo(GoBack)
