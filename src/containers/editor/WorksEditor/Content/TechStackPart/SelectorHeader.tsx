import { FC, memo } from 'react'

import {
  Wrapper,
  CodeIcon,
  DevopsIcon,
  FrameworkIcon,
  DesignIcon,
  Title,
} from '../../styles/content/tech_stack_part/selector_header'

type TProps = {
  title: string
  count: number
}

const Icon: FC<{ title: string }> = ({ title }) => {
  switch (title) {
    case 'DevOps': {
      return <DevopsIcon />
    }

    case '框架': {
      return <FrameworkIcon />
    }

    case '设计': {
      return <DesignIcon />
    }
    default: {
      return <CodeIcon />
    }
  }
}

const SelectorHeader: FC<TProps> = ({ title, count }) => {
  return (
    <Wrapper>
      <Icon title={title} />
      <Title>{title}</Title>
    </Wrapper>
  )
}

export default memo(SelectorHeader)
