import { FC, memo } from 'react'

import { Wrapper, Title, Ul, Li } from './styles/publish_rules'

const PublishRules: FC = () => {
  return (
    <Wrapper>
      <Ul>
        <Title>发帖须知</Title>
        <Li>友善是一切有意义讨论的基础和前提。Don&apos;t be an asshole.</Li>
        <Li>
          如果是求助，问答类帖子，请务必提供上下文、需求场景等必要信息。”如何看待
          xxx” / “xx 和 xx 哪个更 xx” 等炸鱼问题在这里不受欢迎。
        </Li>
        <Li>
          如果不确定内容该发布到哪个社区，可以先发布到 /draft，并 @
          相关社区的志愿者，他们很乐于给你反馈。
        </Li>
        <Li>请尊重自己和他人的时间，不要发布无意义的烂梗和 trash talk。</Li>
        <Li>禁止盗版，勿谈国是，不搞沸腾。</Li>
        <Li>如有其他疑问或建议反馈，请发布到 /feetback#publish。</Li>
      </Ul>
    </Wrapper>
  )
}

export default memo(PublishRules)
