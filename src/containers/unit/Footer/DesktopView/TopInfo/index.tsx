import React, { FC } from 'react'

import HomeCommunity from './HomeCommunity'
import Community from './Community'
import Article from './Article'

export type TProps = {
  type?: string
  title?: string
  noBottomBorder?: boolean
}

const TopInfo: FC<TProps> = ({ type, ...restProps }) => {
  switch (type) {
    case 'home': {
      return <HomeCommunity {...restProps} />
    }
    case 'community': {
      return <Community {...restProps} />
    }
    case 'article': {
      return <Article {...restProps} />
    }
    default:
      return <HomeCommunity {...restProps} />
  }
}

export default React.memo(TopInfo)
