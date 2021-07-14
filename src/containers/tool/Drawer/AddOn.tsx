import { FC, memo } from 'react'

import { ICON } from '@/config'
import { SpaceGrow } from '@/components/Common'
import GotoTop from '@/components/GotoTop'

import {
  Wrapper,
  CloseWrapper,
  CloseBtn,
  EscHint,
  SwitchArticleWrapper,
  SwitchBlock,
  PreviousIcon,
  NextIcon,
  ArticleWrapper,
  IndexDesc,
  ArticleTitle,
  GotoTopWrapper,
} from './styles/add_on'

import { closeDrawer } from './logic'

type TProps = {
  type: string
}

const AddOn: FC<TProps> = ({ type }) => {
  return (
    <Wrapper>
      <CloseWrapper type={type}>
        <CloseBtn
          src={`${ICON}/close-circle.svg`}
          onClick={() => closeDrawer()}
        />
        <EscHint>Esc</EscHint>
      </CloseWrapper>

      <SwitchArticleWrapper show>
        <SwitchBlock>
          <PreviousIcon src={`${ICON}/shape/previous-article.svg`} />
          <ArticleWrapper>
            <IndexDesc>上一篇</IndexDesc>
            <ArticleTitle>
              可能是最性感的开发者社区诚邀内侧，来为你心爱的作品建立一个社区吧！
            </ArticleTitle>
          </ArticleWrapper>
        </SwitchBlock>
        <SwitchBlock>
          <NextIcon src={`${ICON}/shape/next-article.svg`} />
          <ArticleWrapper next>
            <IndexDesc>下一篇</IndexDesc>
            <ArticleTitle>这是下一篇文章的标题！</ArticleTitle>
          </ArticleWrapper>
        </SwitchBlock>
      </SwitchArticleWrapper>
      <SpaceGrow />
      <GotoTopWrapper>
        <GotoTop />
      </GotoTopWrapper>
    </Wrapper>
  )
}

export default memo(AddOn)
