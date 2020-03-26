/*
 *
 * Charger
 *
 */

import React from 'react'
// import T from 'prop-types'

import { ICON_CMD } from '@config'
import { buildLog } from '@utils'

import { Wrapper, Battery, Liquid, MoneySign } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:Charger:index')

// battery effect: https://www.codeseek.co/hudsonkm/battery-charging-animation-with-liquid-azMJmY
// bubbles effect: https://codepen.io/Johnm__/pen/qZqgGJ
const Charger = () => {
  return (
    <Wrapper testid="charger">
      <Battery>
        <Liquid />
        <MoneySign src={`${ICON_CMD}/battery_heart.svg`} />
      </Battery>
    </Wrapper>
  )
}

Charger.propTypes = {
  // https://www.npmjs.com/package/prop-types
  // attr: PropTypes.string,
}

Charger.defaultProps = {
  // attr: 'charger',
}

export default React.memo(Charger)
