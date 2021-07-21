import { FC, memo, createContext, useContext } from 'react'
import dynamic from 'next/dynamic'

import type { TSIZE_SML } from '@/spec'
import { SIZE } from '@/constant'
import { Wrapper } from '../styles/total_count'

// @ts-ignore
const LoadingValueContext = createContext()

// props is not accessable in loading
// see https://github.com/vercel/next.js/issues/7906#issuecomment-787686440
const AnimatedCount = dynamic(() => import('./AnimatedCount'), {
  /* eslint-disable react/display-name */
  loading: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { count, size } = useContext(LoadingValueContext) as {
      count: number
      size: TSIZE_SML
    }
    return <Wrapper size={size}>{count}</Wrapper>
  },
  ssr: false,
})

type TProps = {
  count?: number
  size?: TSIZE_SML
}

const TotalCount: FC<TProps> = ({ count = 0, size = SIZE.SMALL }) => {
  return (
    <LoadingValueContext.Provider value={{ count, size }}>
      <AnimatedCount count={count} size={size} />
    </LoadingValueContext.Provider>
  )
}

export default memo(TotalCount)
