import { FC, memo } from 'react'
import { groupBy, prop } from 'ramda'

import type { TWorks, TMetric } from '@/spec'
import TechStacks from '@/widgets/TechStacks'

import {
  MainWrapper,
  ArticleWrapper,
} from '../../styles/desktop_view/works_layout/techstack_tab'

type TProps = {
  metric: TMetric
  article: TWorks
}

const TechStackTab: FC<TProps> = ({ metric, article }) => {
  const techs = article.techstacks.map((t) => {
    return {
      ...t,
      category: !!t.category ? t.category : 'lang',
    }
  })

  const groupedTechs = groupBy(prop('category'), techs)

  return (
    <MainWrapper metric={metric}>
      <ArticleWrapper>
        <TechStacks techCommunities={groupedTechs} interactive={false} />
      </ArticleWrapper>
    </MainWrapper>
  )
}

export default memo(TechStackTab)
