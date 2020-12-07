/*
 *
 * NaviMenu
 *
 */

import React from 'react'
import T from 'prop-types'
import { last } from 'ramda'

import { ICON } from '@/config'
import { buildLog } from '@/utils'

// import { SpaceGrow } from '@/components/Common'
import {
  Wrapper,
  Title,
  ParentCatalogCard,
  ReadOnlyCatalogCard,
  ReadOnlyTitle,
  ReadOnlyIcon,
  Operator,
  BackIcon,
} from '../styles/dashboard'

/* eslint-disable-next-line */
const log = buildLog('c:NaviMenu:Dashboard')

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
      return [paths[(0, -1)], last(paths)]
    }
  }
}

/**
 * 显示成成层叠结构的样式，有子目录的可以回上一层，没有子目录的则作为只读显示，
 * 类似抽屉的样子
 */
const Dashboard = ({ goBack, childrenPath }) => {
  const [headLevels, lastLevel] = getLevels(childrenPath)

  if (!headLevels) return null

  return (
    <Wrapper>
      {headLevels.map((item, index) => (
        <ParentCatalogCard
          key={item.id}
          isFirst={index === 0}
          isLast={index === childrenPath.length - 1}
          index={index}
        >
          <Title>{item.title}</Title>
          <Operator show onClick={goBack}>
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

Dashboard.propTypes = {
  childrenPath: T.any.isRequired, // TODO
  goBack: T.func.isRequired,
}

Dashboard.defaultProps = {}

export default Dashboard // React.memo(Dashboard)
