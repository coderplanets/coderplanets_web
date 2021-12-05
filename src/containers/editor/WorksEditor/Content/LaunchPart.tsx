import { FC, memo } from 'react'

import { Space } from '@/widgets/Common'
import Button from '@/widgets/Buttons/Button'

import type { TInputData } from '../spec'

import {
  Wrapper,
  ContentWrapper,
  ThxTitle,
  ThxDesc,
  FeedBacks,
  FeedLink,
  NextWrapper,
  NextTitle,
  NextDesc,
  NextButtons,
} from '../styles/content/launch_part'

type TProps = {
  inputData: TInputData
}

const LaunchPart: FC<TProps> = ({ inputData }) => {
  const { title } = inputData
  return (
    <Wrapper>
      <ContentWrapper>
        <ThxTitle>
          <span role="img" aria-label="launch">
            👏🏻
          </span>
          <Space left={5} />
          {title} 已发布 <Space right={5} />
          <span role="img" aria-label="launch">
            👏🏻
          </span>
        </ThxTitle>
        <ThxDesc>
          感谢将作品发布到这里,
          后续如遇到任何问题可以使用下列反馈渠道，我们会在第一时间处理。
        </ThxDesc>
        <FeedBacks>
          <FeedLink href="/feedback" target="_blank">
            反馈论坛
          </FeedLink>
          <Space right={20} />
          <FeedLink
            href="mailto:coderplanets@outlook.com?subject=作品集市"
            target="_blank"
          >
            电子邮件
          </FeedLink>
        </FeedBacks>
        <NextWrapper>
          <NextTitle>更进一步</NextTitle>
          <NextDesc>
            你可以在这里为 {title} 建立一个社区,
            用于用户的讨论，收集需求，获取反馈等.
          </NextDesc>
          <NextButtons>
            <FeedLink href="/groupher" target="_blank">
              查看示例
            </FeedLink>
            <Space right={20} />
            <Button size="small">现在创建</Button>
          </NextButtons>
        </NextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default memo(LaunchPart)
