/*
 *
 * NaviCatalog
 *
 */

import { FC, memo } from 'react'
import { last } from 'ramda'

import type { TNaviTag } from '@/spec'
import { ICON } from '@/config'
import { buildLog } from '@/utils/logger'

// import { SpaceGrow } from '@/widgets/Common'
import {
  Wrapper,
  Title,
  ParentCatalogCard,
  ReadOnlyCatalogCard,
  ReadOnlyTitle,
  ReadOnlyIcon,
  Operator,
  BackIcon,
} from './styles/dashboard'

/* eslint-disable-next-line */
const log = buildLog('w:NaviCatalog:Dashboard')

/**
 * 解析成层叠结构的数据形式
 *
 */
const getLevels = (paths) => {
  switch (paths.length) {
    case 1: {
      return [[paths[0]], null]
    }
    case 2: {
      return [[paths[0]], paths[1]]
    }

    default: {
      return [paths.slice(0, -1), last(paths)]
    }
  }
}

type TProps = {
  viewPath: TNaviTag[]
  goCatalog: (id?: string) => void
}

/**
 * 显示成成层叠结构的样式，有子目录的可以回上一层，没有子目录的则作为只读显示，
 * 类似抽屉的样子
 */
const Dashboard: FC<TProps> = ({ viewPath, goCatalog }) => {
  const [headLevels, lastLevel] = getLevels(viewPath)
  /* 判断是不是第二层 */
  const is2ecLevel = viewPath.length === 1

  if (!headLevels) return null

  return (
    <Wrapper>
      {headLevels.map((item, index) => (
        <ParentCatalogCard
          key={item.id}
          isFirst={index === 0}
          isLast={index === headLevels.length - 1}
          index={index}
        >
          <Title>{item.title}</Title>
          <Operator
            onClick={() => (is2ecLevel ? goCatalog() : goCatalog(item.id))}
          >
            <BackIcon src={`${ICON}/shape/navi-back.svg`} />
          </Operator>
        </ParentCatalogCard>
      ))}

      {lastLevel && (
        <ReadOnlyCatalogCard>
          <ReadOnlyTitle>{lastLevel.title}</ReadOnlyTitle>
          <ReadOnlyIcon src={lastLevel.icon} />
        </ReadOnlyCatalogCard>
      )}
    </Wrapper>
  )
}

export default memo(Dashboard)
