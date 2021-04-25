import React from 'react'

import type { TREPORT_ITEM } from '../spec'

import Main from './Main'
import Detail from './Detail'
import Info from './Info'

type TProps = {
  view: 'main' | 'detail' | 'info'
  items: TREPORT_ITEM[]
  activeItem: TREPORT_ITEM
  explainItem: TREPORT_ITEM
}

const ArticleReport: React.FC<TProps> = ({
  view,
  items,
  activeItem,
  explainItem,
}) => {
  console.log('view -> ', view)
  switch (view) {
    case 'info': {
      return <Info activeItem={activeItem} />
    }

    case 'detail': {
      return <Detail explainItem={explainItem} />
    }

    default: {
      return <Main items={items} activeItem={activeItem} />
    }
  }
}

export default ArticleReport
