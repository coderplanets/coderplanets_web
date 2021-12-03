/*
 *
 * EmptyThread
 *
 */

import { FC, memo } from 'react'
import { includes } from 'ramda'
import Link from 'next/link'

import { buildLog } from '@/utils/logger'
import { Trans } from '@/utils/i18n'

import { THREAD } from '@/constant'
import {
  Icon404,
  Wrapper,
  Icon,
  Text,
  Title,
  DescWrapper,
  Desc,
  IssueLink,
} from './styles'
import { TThread } from '@/spec'

/* eslint-disable-next-line */
const log = buildLog('c:EmptyThread:index')

type TProps = {
  thread: TThread
}

const EmptyThread: FC<TProps> = ({ thread }) => (
  <Wrapper noShiftRight={includes(thread, [THREAD.POST, THREAD.BLOG])}>
    <Icon>
      <Icon404 />
    </Icon>
    <Text>
      <Title>
        未找到相关
        {`${Trans(thread)}`}
        信息
      </Title>
      <DescWrapper>
        <Desc>如果你有相关的内容，欢迎一起和大家一起分享交流</Desc>
        <Desc>
          建议或遇到问题请
          <Link href="/feedback" passHref>
            <IssueLink>在这里反馈</IssueLink>
          </Link>
        </Desc>
      </DescWrapper>
    </Text>
  </Wrapper>
)

export default memo(EmptyThread)
