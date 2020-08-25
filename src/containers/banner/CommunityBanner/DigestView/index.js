import React from 'react'

import ColumnView from './ColumnView'
import RowView from './RowView'

const DigestView = ({ layout, ...rest }) => {
  return (
    <React.Fragment>
      {layout === 'up-down' ? <ColumnView {...rest} /> : <RowView {...rest} />}
    </React.Fragment>
  )
}

export default DigestView
