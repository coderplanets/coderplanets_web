import React from 'react'

import type { TREPORT_ITEM } from '../spec'

import Main from './Main'
import Detail from './Detail'
import Info from './Info'

type TProps = {
  view: 'main' | 'detail' | 'info'
  items: TREPORT_ITEM[]
  activeItem: TREPORT_ITEM
}

const ArticleReport: React.FC<TProps> = ({ view, items, activeItem }) => {
  // const child =
  switch (view) {
    case 'info': {
      return <Info />
    }

    case 'detail': {
      return <Detail />
    }

    default: {
      return <Main items={items} activeItem={activeItem} />
    }
  }
}

export default ArticleReport
