import { FC } from 'react'

import type { TREPORT_ITEM } from '../spec'

import Main from './Main'
import Detail from './Detail'

type TProps = {
  view: 'main' | 'detail'
  items: TREPORT_ITEM[]
  activeItem: TREPORT_ITEM
}

const ReportContent: FC<TProps> = ({ view, items, activeItem }) => {
  switch (view) {
    case 'detail': {
      return <Detail activeItem={activeItem} />
    }

    default: {
      return <Main items={items} activeItem={activeItem} />
    }
  }
}

export default ReportContent
