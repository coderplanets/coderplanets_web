/*
 *
 * Checker
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@config'
import { buildLog } from '@utils'

import { Wrapper, IconWrapper, Icon } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:Checker:index')

const Checker = ({ checked, hiddenMode }) => {
  const showBg = checked || !hiddenMode
  return (
    <Wrapper showBg={showBg}>
      <IconWrapper checked={checked}>
        <Icon src={`${ICON_CMD}/community_new_check.svg`} />
      </IconWrapper>
    </Wrapper>
  )
}

Checker.propTypes = {
  checked: T.bool,
  hiddenMode: T.bool,
}

Checker.defaultProps = {
  checked: false,
  hiddenMode: false,
}

export default React.memo(Checker)
