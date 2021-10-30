import { FC, memo } from 'react'

import CommunityTagSetter from '@/containers/tool/CommunityTagSetter'

import type { TTechCommunities, TTechStackCategory } from '@/spec'
import NoticeBar from '@/widgets/NoticeBar'
import TechStacks from '@/widgets/TechStacks'

import { Wrapper, TechsWrapper } from '../styles/content/techstack_part'

import { setActiveTechCategory, addTechStack, removeTechStack } from '../logic'

type TProps = {
  techCommunities: TTechCommunities
}

const TechStackPart: FC<TProps> = ({ techCommunities }) => {
  return (
    <Wrapper>
      <CommunityTagSetter
        selectedCommunity={{ raw: '' }}
        onCommunitySelect={addTechStack}
      />

      <NoticeBar
        type="info"
        content="在技术社区，分享技术栈会受到更多关注和欢迎。后续在相关子社区以及统计页面等也会得到更多的提及。"
        top={20}
        left={-8}
        bottom={20}
        noBg
      />
      <TechsWrapper>
        <TechStacks
          techCommunities={techCommunities}
          onAdd={(category) =>
            setActiveTechCategory(category.raw as TTechStackCategory)
          }
          onRemove={(tech) => removeTechStack(tech)}
        />
      </TechsWrapper>
    </Wrapper>
  )
}

export default memo(TechStackPart)
