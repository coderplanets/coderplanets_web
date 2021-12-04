import { FC, memo } from 'react'

import Linker from '@/widgets/Linker'
import { HintDesc } from './styles'

type TProps = {
  code?: number
}

const ErrorDesc: FC<TProps> = ({ code }) => {
  switch (code) {
    case 404:
      return (
        <HintDesc>
          如果是站点的问题, 欢迎在本站的
          <Linker
            src="/feedback"
            external={false}
            text="反馈渠道"
            inline
            left={3}
            right={3}
          />
          和我们取得联系。
        </HintDesc>
      )
    default:
      return (
        <HintDesc>
          你可能发现了一个 Bug, 本站有专门的
          <Linker
            src="/feedback"
            external={false}
            text="反馈与建议"
            inline
            left={3}
            right={3}
          />
          子社区处理相关问题，恳请反馈、建议。我们会尽快修复.
        </HintDesc>
      )
  }
}

export default memo(ErrorDesc)
