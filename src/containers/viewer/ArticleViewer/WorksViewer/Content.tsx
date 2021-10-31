import { FC, memo } from 'react'
import { groupBy, prop } from 'ramda'
import type { TWorks } from '@/spec'
import { METRIC } from '@/constant'

import ArticleFooter from '@/containers/unit/ArticleFooter'
import ArticeBody from '@/widgets/ArtimentBody'
import TechStacks from '@/widgets/TechStacks'
import WorksInfoCard from '@/widgets/WorksInfoCard'

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
      return <WorksInfoCard article={article} />
    }

    case 'techstack': {
      return <TechStacks techCommunities={groupedTechs} interactive={false} />
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
