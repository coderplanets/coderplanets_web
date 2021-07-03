import { FC, memo } from 'react'

import { TFooterView, VIEW } from '../../constants'

import HomeCommunity from './HomeCommunity'
import Community from './Community'
import Article from './Article'

export type TProps = {
  type?: TFooterView
  title?: string
  noBottomBorder?: boolean
}

const TopInfo: FC<TProps> = ({ type, ...restProps }) => {
  switch (type) {
    case VIEW.HOME: {
      return <HomeCommunity {...restProps} />
    }
    case VIEW.COMMUNITY: {
      return <Community {...restProps} />
    }
    // case VIEW.HOSTING_COMMUNITY: {
    //   return <Community {...restProps} />
    // }
    case VIEW.ARTICLE: {
      return <Article {...restProps} />
    }
    default:
      return <HomeCommunity {...restProps} />
  }
}

export default memo(TopInfo)
