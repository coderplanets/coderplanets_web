import { FC, memo } from 'react'

import type { TWorks, TMetric } from '@/spec'
import { classifyTechstack } from '@/utils/helper'
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
  const techCommunities = classifyTechstack(article)

  return (
    <MainWrapper metric={metric}>
      <ArticleWrapper>
        <TechStacks techCommunities={techCommunities} interactive={false} />
      </ArticleWrapper>
    </MainWrapper>
  )
}

export default memo(TechStackTab)
