import { Fragment, useState } from 'react'

import ExpandView from './ExpandView'
import NormalView from './NormalView'

const MobileView = (props) => {
  const [expand, setExpand] = useState(false)

  return (
    <Fragment>
      {expand ? (
        <ExpandView {...props} toggleExpand={() => setExpand(false)} />
      ) : (
        <NormalView {...props} toggleExpand={() => setExpand(true)} />
      )}
    </Fragment>
  )
}

export default MobileView
