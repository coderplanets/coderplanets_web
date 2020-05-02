import React from 'react'

import Center from './Center'
import Bottom from './Bottom'

const Next = ({ type, ...restProps }) => {
  switch (type) {
    case 'center':
      return <Center {...restProps} />

    default: {
      return <Bottom {...restProps} />
    }
  }
}

export default React.memo(Next)
