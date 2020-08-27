/*
 *
 * Tag
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@/config'
import { buildLog } from '@/utils'

import { Wrapper, CloseIcon } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:Tag:index')

const Tag = ({ children, onClose }) => {
  const closeable = onClose !== null

  return (
    <Wrapper testId="tag" closeable={closeable}>
      {children}
      {closeable && (
        <div onClick={onClose}>
          <CloseIcon src={`${ICON_CMD}/close.svg`} />
        </div>
      )}
    </Wrapper>
  )
}

Tag.propTypes = {
  children: T.oneOfType([T.string, T.node]).isRequired,
  onClose: T.oneOfType([T.func, T.instanceOf(null)]),
}

Tag.defaultProps = {
  onClose: null,
}

export default React.memo(Tag)
