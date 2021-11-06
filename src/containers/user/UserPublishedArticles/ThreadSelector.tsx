import { FC, memo, useState } from 'react'
import { reduce, add, values } from 'ramda'

import type { TUser } from '@/spec'
import { ARTICLE_THREAD } from '@/constant'
import { titleCase, plural } from '@/utils/helper'
import { Trans } from '@/utils/i18n'
import { SpaceGrow } from '@/widgets/Common'

import {
  Wrapper,
  Text,
  Count,
  SelectWrapper,
  SelectLabel,
  SubCount,
} from './styles/thread_selector'

const THREADS = values(ARTICLE_THREAD)

const getSubCount = (meta, thread, convertNull = true): number | undefined => {
  const subCount = meta[`published${plural(titleCase(thread))}Count`]

  if (convertNull) {
    return !!subCount ? subCount : 0
  }

  return subCount
}

const publishedTotal = (meta) => {
  const totalArrs = THREADS.map((t) => getSubCount(meta, t))
  return reduce(add, 0, totalArrs)
}

type TProps = {
  user: TUser
}

const ThreadSelector: FC<TProps> = ({ user }) => {
  const [activeThread, setActiveThread] = useState(ARTICLE_THREAD.POST)

  const { meta } = user
  const total = publishedTotal(meta)

  return (
    <Wrapper>
      <Text>累计共发布内容</Text>
      <Count>{total}</Count>
      <Text>篇</Text>
      <SpaceGrow />
      <SelectWrapper>
        {THREADS.map((t) => {
          const subCount = getSubCount(meta, t, false)
          if (!!subCount) {
            return (
              <SelectLabel key={t} $active={activeThread === t}>
                {Trans(t)}
                <SubCount>{subCount}</SubCount>
              </SelectLabel>
            )
          }
          return null
        })}
      </SelectWrapper>
    </Wrapper>
  )
}

export default memo(ThreadSelector)
