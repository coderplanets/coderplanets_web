import { FC, memo } from 'react'

import { joinUS } from '@/utils/helper'
import Linker from '@/widgets/Linker'
import Button from '@/widgets/Buttons/Button'

import {
  Wrapper,
  WipIcon,
  Title,
  Desc,
  Ul,
  Li,
  InnerLinker,
} from './styles/wip_thread'

type TProps = {
  title?: string
}

const WipThread: FC<TProps> = ({ title = '该' }) => {
  return (
    <Wrapper>
      <WipIcon />
      <Title>Oops，{title}版块设计施工中 ...</Title>
      <Desc>
        该功能预计在内测阶段完成，如果你有兴趣或建议，欢迎在以下渠道参与共建 /
        内测：
      </Desc>
      <Ul>
        <Li>
          社区：
          <Linker
            src="/feedback"
            external={false}
            text="反馈与建议"
            inline
            left={4}
            right={4}
          />
        </Li>
        <Li>邮件：coderplanets@outlook.com </Li>
        <Li>
          <InnerLinker>
            Github：
            <Linker src="https://github.com/coderplanets" />
          </InnerLinker>
        </Li>
        <Li>
          <InnerLinker>
            IM 交流:
            <Button onClick={() => joinUS()} size="small" ghost noBorder>
              微信群
            </Button>
          </InnerLinker>
        </Li>
      </Ul>
    </Wrapper>
  )
}

export default memo(WipThread)
