import { FC, memo } from 'react'
import type { TWorks } from '@/spec'
import { WORKS_TAB } from '@/constant'

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
    case WORKS_TAB.BASIC: {
      return <WorksInfoCard article={article} />
    }

    case WORKS_TAB.TECHSTACKS: {
      return (
        <TechStacks techCommunities={techCommunities} interactive={false} />
      )
    }

    default: {
      return (
        <div>
          <ArticeBody document={article.document} />
          <ArticleFooter />
        </div>
      )
    }
  }
}

export default memo(Content)
