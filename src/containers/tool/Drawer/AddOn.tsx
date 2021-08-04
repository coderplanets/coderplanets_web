import { FC, memo } from 'react'

import { SpaceGrow } from '@/components/Common'
import GotoTop from '@/components/GotoTop'
import IconButton from '@/components/Buttons/IconButton'

import {
  Wrapper,
  CloseWrapper,
  SwitchArticleWrapper,
  SwitchBlock,
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
        <IconButton
          path="shape/close.svg"
          onClick={closeDrawer}
          size={26}
          dimWhenIdle
        />
        <IconButton
          path="article/share.svg"
          size={19}
          mTop={7}
          mLeft={-1}
          hint="分享本文"
          hintPlacement="bottom"
          dimWhenIdle
        />
      </CloseWrapper>

      <SwitchArticleWrapper show>
        <SwitchBlock>
          <IconButton
            path="shape/previous-article.svg"
            size={23}
            mRight={0}
            mLeft={2}
            dimWhenIdle
          />
          <ArticleWrapper>
            <IndexDesc>上一篇</IndexDesc>
            <ArticleTitle>
              可能是最性感的开发者社区诚邀内侧，来为你心爱的作品建立一个社区吧！
            </ArticleTitle>
          </ArticleWrapper>
        </SwitchBlock>
        <SwitchBlock>
          <IconButton
            path="shape/next-article.svg"
            size={23}
            mTop={10}
            mRight={6}
            dimWhenIdle
          />
          <ArticleWrapper next>
            <IndexDesc>下一篇</IndexDesc>
            <ArticleTitle>这是下一篇文章的标题！</ArticleTitle>
          </ArticleWrapper>
        </SwitchBlock>
      </SwitchArticleWrapper>
      <SpaceGrow />
      <GotoTopWrapper>
        <GotoTop type="drawer" />
      </GotoTopWrapper>
    </Wrapper>
  )
}

export default memo(AddOn)
