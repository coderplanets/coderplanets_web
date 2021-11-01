import { FC, memo } from 'react'

import {
  Wrapper,
  CodeIcon,
  DevopsIcon,
  FrameworkIcon,
  DatabaseIcon,
  DesignIcon,
  Title,
  Spliter,
} from './styles/category'

type TProps = {
  title: string
}

const Icon: FC<{ title: string }> = ({ title }) => {
  switch (title) {
    case 'devOps': {
      return <DevopsIcon />
    }
    case '框架': {
      return <FrameworkIcon />
    }
    case '数据库': {
      return <DatabaseIcon />
    }
    case '设计': {
      return <DesignIcon />
    }
    default: {
      return <CodeIcon />
    }
  }
}

const SelectorHeader: FC<TProps> = ({ title }) => {
  return (
    <Wrapper>
      <Icon title={title} />
      <Title>{title === 'devOps' ? 'DevOps' : title}</Title>
      <Spliter />
    </Wrapper>
  )
}

export default memo(SelectorHeader)
