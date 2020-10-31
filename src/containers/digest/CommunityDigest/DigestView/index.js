import React from 'react'

import { C11N } from '@/constant'
import { useDevice } from '@/hooks'

import ColumnView from './ColumnView'
import RowView from './RowView'

const DigestView = ({ layout, ...rest }) => {
  const { isMobile } = useDevice()

  if (isMobile) {
    return <ColumnView {...rest} />
  }

  return (
    <React.Fragment>
      {layout === C11N.DIGEST ? (
        <ColumnView {...rest} />
      ) : (
        <RowView {...rest} />
      )}
    </React.Fragment>
  )
}

export default DigestView
