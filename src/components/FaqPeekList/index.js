/*
 *
 * FaqPeekList
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@config'
import { buildLog } from '@utils'

import { Wrapper, ArrowIcon } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:FaqPeekList:index')

const FaqPeekList = ({ active }) => {
  return (
    <Wrapper testid="faqPeekList" active={active}>
      <ArrowIcon src={`${ICON_CMD}/peek-arrow.svg`} />
      <div>
        <p>impress me</p>
      </div>
    </Wrapper>
  )
}

FaqPeekList.propTypes = {
  active: T.bool,
}

FaqPeekList.defaultProps = {
  active: false,
}

export default React.memo(FaqPeekList)
