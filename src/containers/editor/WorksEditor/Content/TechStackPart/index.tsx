import { FC, memo } from 'react'

import CommunityTagSetter from '@/containers/tool/CommunityTagSetter'

import ArrowButton from '@/widgets/Buttons/ArrowButton'
import NoticeBar from '@/widgets/NoticeBar'

import type { TTechCommunities } from '../../spec'
import { TECHSTACK_CATEGORYS } from '../../constant'
import SelectorHeader from './SelectorHeader'
import SelectorRow from './SelectorRow'

import {
  Wrapper,
  TechsWrapper,
  TechBlock,
  Footer,
} from '../../styles/content/tech_stack_part'

import { nextStep, setActiveTechCategory, addTechStack } from '../../logic'

type TProps = {
  techCommunities: TTechCommunities
}

const TechStackPart: FC<TProps> = ({ techCommunities }) => {
  const valid = true

  console.log('## techCommunities: ', techCommunities)

  return (
    <Wrapper>
      <CommunityTagSetter
        selectedCommunity={{ raw: '' }}
        onCommunitySelect={addTechStack}
      />

      <NoticeBar
        type="info"
        content="在技术社区，分享技术栈会受到更多关注和欢迎。后续在相关子社区以及统计页面等也会得到更多的提及。"
        top={10}
        left={-8}
        bottom={30}
        noBg
      />
      <TechsWrapper>
        {TECHSTACK_CATEGORYS.map((category) => (
          <TechBlock key={category.raw}>
            <SelectorHeader title={category.title} />
            <SelectorRow
              onAdd={() => setActiveTechCategory(category.raw)}
              techs={techCommunities[category.raw]}
            />
          </TechBlock>
        ))}
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
