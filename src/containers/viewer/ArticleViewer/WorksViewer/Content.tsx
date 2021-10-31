import { FC, memo } from 'react'
import type { TWorks } from '@/spec'

import ArticeBody from '@/widgets/ArtimentBody'

type TProps = {
  article: TWorks
  tab: string
}

const Content: FC<TProps> = ({ article, tab }) => {
  switch (tab) {
    case 'basic': {
      return <div>tab</div>
    }

    case 'techstack': {
      return <div>techstack</div>
    }

    default: {
      return <ArticeBody document={article.document} />
    }
  }
}

export default memo(Content)
