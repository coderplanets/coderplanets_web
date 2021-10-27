import { FC, memo } from 'react'

import CommunityTagSetter from '@/containers/tool/CommunityTagSetter'

import { selectCommunity } from '@/utils/helper'
import ArrowButton from '@/widgets/Buttons/ArrowButton'
import NoticeBar from '@/widgets/NoticeBar'

import { mockCommunities } from '@/utils/mock'

import SelectorHeader from './SelectorHeader'
import SelectorRow from './SelectorRow'

import {
  Wrapper,
  TechsWrapper,
  TechBlock,
  Footer,
} from '../../styles/content/tech_stack_part'

import { nextStep } from '../../logic'

const TechStackPart: FC = () => {
  const valid = true

  return (
    <Wrapper>
      <CommunityTagSetter selectedCommunity={{ raw: '' }} />

      <NoticeBar
        type="info"
        content="在技术社区，分享技术栈会受到更多关注和欢迎。后续在相关子社区以及统计页面等也会得到更多的提及。"
        top={10}
        left={-8}
        bottom={30}
        noBg
      />
      <TechsWrapper>
        <TechBlock>
          <SelectorHeader title="编程语言" />
          <SelectorRow
            onAdd={() => selectCommunity('lang')}
            techs={mockCommunities(2)}
          />
        </TechBlock>

        <TechBlock>
          <SelectorHeader title="框架" />
          <SelectorRow
            onAdd={() => selectCommunity('framework')}
            techs={mockCommunities(3)}
          />
        </TechBlock>

        <TechBlock>
          <SelectorHeader title="数据库" />
          <SelectorRow onAdd={() => selectCommunity('database')} />
        </TechBlock>

        <TechBlock>
          <SelectorHeader title="DevOps" />
          <SelectorRow onAdd={() => selectCommunity('devOps')} />
        </TechBlock>

        <TechBlock>
          <SelectorHeader title="设计" />
          <SelectorRow onAdd={() => selectCommunity('design')} />
        </TechBlock>
      </TechsWrapper>
      <Footer>
        {valid && (
          <ArrowButton size="large" disabled={!valid} onClick={nextStep}>
            下一步
          </ArrowButton>
        )}
      </Footer>
    </Wrapper>
  )
}

export default memo(TechStackPart)
