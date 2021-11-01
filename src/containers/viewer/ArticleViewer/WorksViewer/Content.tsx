import { FC, memo } from 'react'
import type { TWorks } from '@/spec'
import { METRIC } from '@/constant'

import { classifyTechstack } from '@/utils/helper'

import ArticleFooter from '@/containers/unit/ArticleFooter'
import ArticeBody from '@/widgets/ArtimentBody'
import TechStacks from '@/widgets/TechStacks'
import WorksInfoCard from '@/widgets/WorksInfoCard'

type TProps = {
  article: TWorks
  tab: string
}

const Content: FC<TProps> = ({ article, tab }) => {
  const techCommunities = classifyTechstack(article)

  switch (tab) {
    case 'basic': {
      return <WorksInfoCard article={article} />
    }

    case 'techstack': {
      return (
        <TechStacks techCommunities={techCommunities} interactive={false} />
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
