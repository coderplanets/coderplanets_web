import React from 'react'

import HomeCommunity from './HomeCommunity'
import Community from './Community'

export type TProps = {
  type?: string
  title?: string
  noBottomBorder?: boolean
}

const TopInfo: React.FC<TProps> = ({ type, ...restProps }) => {
  switch (type) {
    case 'home': {
      return <HomeCommunity {...restProps} />
    }
    case 'community': {
      return <Community {...restProps} />
    }
    default:
      return <HomeCommunity {...restProps} />
  }
}

export default React.memo(TopInfo)
