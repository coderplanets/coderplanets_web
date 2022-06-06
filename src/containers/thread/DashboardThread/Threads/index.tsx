import { FC, memo } from 'react'

import ToggleSwitch from '@/widgets/Buttons/ToggleSwitch'
import { Divider } from '@/widgets/Common'

import HelpThread from './HelpThread'

import Portal from '../Portal'
import SectionLabel from '../SectionLabel'
import { Wrapper, Desc } from '../styles/threads'

type TProps = {
  testid?: string
}

const Threads: FC<TProps> = ({ testid = 'threads' }) => {
  return (
    <Wrapper>
      <Portal
        title="社区板块"
        desc="按需开启社区板块，开启后对应板块会对外公开。"
      />
      <br />

      <SectionLabel
        title="讨论区"
        desc={
          <Desc>
            用户可在此发帖，参与社区讨论，帖子可由团队管理员同步到看板墙。更多内容请参考
            xx
          </Desc>
        }
        addon={<ToggleSwitch checked />}
      />
      <Divider top={25} bottom={30} />
      <SectionLabel
        title="看板墙"
        desc={
          <Desc>
            用户可在此发帖，参与社区讨论，帖子可由团队管理员同步到看板墙。更多内容请参考
            xx
          </Desc>
        }
        addon={<ToggleSwitch />}
      />
      <Divider top={25} bottom={30} />
      <SectionLabel
        title="更新日志"
        desc={
          <Desc>
            用户可在此发帖，参与社区讨论，帖子可由团队管理员同步到看板墙。更多内容请参考
            xx
          </Desc>
        }
        addon={<ToggleSwitch />}
      />
      <Divider top={25} bottom={30} />
      <SectionLabel
        title="帮助台"
        desc={
          <Desc>
            用户可在此发帖，参与社区讨论，帖子可由团队管理员同步到看板墙。更多内容请参考
            xx
          </Desc>
        }
        addon={<ToggleSwitch checked />}
      />
      <HelpThread />
    </Wrapper>
  )
}

export default memo(Threads)
