import { FC, memo } from 'react'

import ArticleLayout from './ArticleLayout'
import WorksLayout from './WorksLayout'

type TProps = {
  type?: 'article' | 'works' | 'job' | 'comment' | 'radar'
}

const Header: FC<TProps> = ({ type = 'article' }) => {
  switch (type) {
    case 'works': {
      return <WorksLayout />
    }

    default: {
      return <ArticleLayout />
    }
  }
}

export default memo(Header)
