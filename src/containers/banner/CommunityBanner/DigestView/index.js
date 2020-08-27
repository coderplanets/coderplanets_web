import React from 'react'

import { C11N } from '@/constant'

import ColumnView from './ColumnView'
import RowView from './RowView'

const DigestView = ({ layout, ...rest }) => {
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
