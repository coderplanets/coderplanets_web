import { FC, memo } from 'react'

import ArticleLayout from './ArticleLayout'
import WorksLayout from './WorksLayout'

type TProps = {
  type: 'article' | 'works' | 'job' | 'comment' | 'radar'
  onLinkChange: (link: string) => void
  onUseTemplateChange: (use: boolean) => void
}

const Options: FC<TProps> = ({ type, onLinkChange, onUseTemplateChange }) => {
  switch (type) {
    case 'works': {
      return <WorksLayout />
    }

    default: {
      return <ArticleLayout onLinkChange={onLinkChange} />
    }
  }
}

export default memo(Options)
