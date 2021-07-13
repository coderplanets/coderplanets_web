import { FC, memo, createContext, useContext } from 'react'
import dynamic from 'next/dynamic'

import { Space } from '@/components/Common'
import { Wrapper } from '../styles/total_count'

// @ts-ignore
const LoadingValueContext = createContext()

// props is not accessable in loading
// see https://github.com/vercel/next.js/issues/7906#issuecomment-787686440
const AnimatedCount = dynamic(() => import('./AnimatedCount'), {
  /* eslint-disable react/display-name */
  loading: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const value = useContext(LoadingValueContext) as number
    return <Wrapper>{value}</Wrapper>
  },
  ssr: false,
})

type TProps = {
  count?: number
}

const TotalCount: FC<TProps> = ({ count }) => {
  return (
    <LoadingValueContext.Provider value={count}>
      <AnimatedCount count={count} />
    </LoadingValueContext.Provider>
  )
}

export default memo(TotalCount)
