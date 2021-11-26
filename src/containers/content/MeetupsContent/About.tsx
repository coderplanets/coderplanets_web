import { FC, memo } from 'react'

import Linker from '@/widgets/Linker'

import { Wrapper } from './styles/about'

const About: FC = () => {
  return (
    <Wrapper>
      小聚（Meetups）版块部分功能还在编写完善中，所展示的 UI/UX
      部分为的目前设计的产品形态，后期可能会有所调整，如果你有任何建议和反馈，欢迎。
      <Linker
        src="/feedback"
        external={false}
        text="来这里讨论"
        inline
        left={4}
        right={4}
      />
    </Wrapper>
  )
}

export default memo(About)
