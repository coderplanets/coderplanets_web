import { FC, memo } from 'react'
import { groupBy, prop } from 'ramda'
import type { TWorks } from '@/spec'
import { METRIC } from '@/constant'

import ArticeBody from '@/widgets/ArtimentBody'
import TechStacks from '@/widgets/TechStacks'
import ArticleFooter from '@/containers/unit/ArticleFooter'

type TProps = {
  article: TWorks
  tab: string
}

const Content: FC<TProps> = ({ article, tab }) => {
  const techs = article.techstacks.map((t) => {
    return {
      ...t,
      category: !!t.category ? t.category : 'lang',
    }
  })

  const groupedTechs = groupBy(prop('category'), techs)

  switch (tab) {
    case 'basic': {
      return <div>tab</div>
    }

    case 'techstack': {
      return (
        <div>
          <TechStacks techCommunities={groupedTechs} interactive={false} />
        </div>
      )
    }

    default: {
      return (
        <div>
          <ArticeBody document={article.document} />
          <ArticleFooter metric={METRIC.WORKS_ARTICLE} />
        </div>
      )
    }
  }
}

export default memo(Content)
