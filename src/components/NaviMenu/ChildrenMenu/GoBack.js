/*
 *
 * NaviMenu
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog } from '@utils'
import { ICON_CMD } from '@config'

import { Wrapper, BackIcon } from '../styles/children_menu/go_back'

/* eslint-disable-next-line */
const log = buildLog('c:GoBack:index')

/* <ActiveDot /> */
const GoBack = ({ goBack }) => {
  return (
    <Wrapper onClick={goBack}>
      <BackIcon src={`${ICON_CMD}/navi/circle_solid_back.svg`} />
      <div>返回</div>
    </Wrapper>
  )
}

GoBack.propTypes = {
  goBack: T.func.isRequired,
}

GoBack.defaultProps = {}

export default React.memo(GoBack)
