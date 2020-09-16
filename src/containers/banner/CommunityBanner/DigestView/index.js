import React from 'react'

import { C11N } from '@/constant'
import { useMedia } from '@/hooks'

import ColumnView from './ColumnView'
import RowView from './RowView'

const DigestView = ({ layout, ...rest }) => {
  const { mobile } = useMedia()

  if (mobile) {
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
