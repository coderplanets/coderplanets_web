/*
 * Desc
 */

import { FC, Fragment, memo, createContext, useContext } from 'react'
import dynamic from 'next/dynamic'

import { buildLog } from '@/utils'
import { Space } from '@/components/Common'

import NormalCount from './NormalCount'
import { Text } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:Upvote:Desc')

// @ts-ignore
const LoadingValueContext = createContext()

// props is not accessable in loading
// see https://github.com/vercel/next.js/issues/7906#issuecomment-787686440
const AnimatedCount = dynamic(() => import('./AnimatedCount'), {
  /* eslint-disable react/display-name */
  loading: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const value = useContext(LoadingValueContext) as number
    return <NormalCount count={value} />
  },
  ssr: false,
})

type TProps = {
  count?: number
  avatarsRowLimit?: number
  noBody: boolean
  alias?: string // 觉得很赞(default), 觉得很酷(works), 学到了(blog), 感兴趣(meetup), 有意思(Radar)
}

const Desc: FC<TProps> = ({
  noBody,
  count = 4,
  avatarsRowLimit = 3,
  alias = '觉得很赞',
}) => {
  const onlyOnePeople = count === 1

  return (
    <Fragment>
      {!noBody && !onlyOnePeople && count > avatarsRowLimit && (
        <Fragment>
          <Space left={3} />
          <Text>等</Text>
          <Space left={3} />
          <LoadingValueContext.Provider value={count}>
            <AnimatedCount count={count} /> <Space left={4} />
          </LoadingValueContext.Provider>
          <Text>人</Text>
        </Fragment>
      )}
      {noBody ? (
        <LoadingValueContext.Provider value={count}>
          <AnimatedCount count={count} /> <Space left={4} />
        </LoadingValueContext.Provider>
      ) : (
        <Text>{alias}</Text>
      )}
    </Fragment>
  )
}

export default memo(Desc)
