/*
 *
 * PublishButton
 *
 */

import { memo, FC } from 'react'
import Router from 'next/router'

import type { TThread } from '@/spec'

import { THREAD, HCN } from '@/constant'
import { buildLog } from '@/utils/logger'
import { authWarn } from '@/utils/helper'
import { useAccount } from '@/hooks'

import PostLayout from './PostLayout'
import WorksLayout from './WorksLayout'

import { Wrapper, PubButton } from '../styles/publish_button'
import { getTargetPage, getText } from './helper'

/* eslint-disable-next-line */
const log = buildLog('c:PublishButton:index')

type TProps = {
  thread?: TThread
  community?: string
  text?: string
}

const PublishButton: FC<TProps> = ({
  thread = THREAD.POST,
  community = HCN,
  text = getText(thread),
}) => {
  const { c11n } = useAccount()
  const { isLogin } = c11n

  return (
    <Wrapper>
      <PubButton
        onClick={() => {
          if (!isLogin) return authWarn()
          const url = getTargetPage(community, thread)
          Router.push(url)
        }}
      >
        {thread === THREAD.WORKS ? (
          <WorksLayout text={text} />
        ) : (
          <PostLayout text={text} />
        )}
      </PubButton>
    </Wrapper>
  )
}

export default memo(PublishButton)
