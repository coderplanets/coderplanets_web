/*
 *
 * PublishButton
 *
 */

import { memo, FC } from 'react'

import type { TThread } from '@/spec'

import { THREAD } from '@/constant'
import { ICON } from '@/config'
import { buildLog } from '@/utils/logger'

import DropdownButton from './DropdownButton'
import { Wrapper } from './styles/publish_button'

/* eslint-disable-next-line */
const log = buildLog('c:PublishButton:index')

const getOptions = (thread) => {
  switch (thread) {
    case THREAD.BLOG: {
      return [
        {
          key: 'publish',
          icon: `${ICON}/edit/publish-write.svg`,
          title: '提交博客',
          desc: '发布后会第一次出现在相应版块首页。',
        },
        {
          key: 'link',
          link: 'https://newpage',
          icon: `${ICON}/article/report.svg`,
          title: '发布须知',
          desc: '请确保你发布的内容符合社区的基本价值观和规范，否则会被限流或直接删除。',
        },
      ]
    }
    case THREAD.JOB: {
      return [
        {
          key: 'publish',
          icon: `${ICON}/edit/publish-write.svg`,
          title: '我要招人',
          desc: '发布后会第一次出现在相应版块首页。',
        },
        {
          key: 'link',
          link: 'https://newpage',
          icon: `${ICON}/article/report.svg`,
          title: '发布须知',
          desc: '请确保你发布的内容符合社区的基本价值观和规范，否则会被限流或直接删除。',
        },
      ]
    }
    default: {
      return [
        {
          key: 'publish',
          icon: `${ICON}/edit/publish-write.svg`,
          title: '发布帖子',
          desc: '发布后会第一次出现在相应版块首页。',
        },
        {
          key: 'link',
          link: 'https://newpage',
          icon: `${ICON}/article/report.svg`,
          title: '发布须知',
          desc: '请确保你发布的内容符合社区的基本价值观和规范，否则会被限流或直接删除。',
        },
      ]
    }
  }
}

type TProps = {
  thread?: TThread
  onCreate?: () => void
}

const PublishButton: FC<TProps> = ({ thread = THREAD.POST, onCreate }) => {
  const options = getOptions(thread)

  return (
    <Wrapper>
      <DropdownButton
        placement="bottom-end"
        options={options}
        panelMinWidth="210px"
        onClick={(key) => {
          if (key === 'publish') onCreate()
        }}
      >
        {options[0].title}
      </DropdownButton>
    </Wrapper>
  )
}

export default memo(PublishButton)
