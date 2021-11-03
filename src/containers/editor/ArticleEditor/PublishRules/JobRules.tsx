import { FC, memo } from 'react'

import { Wrapper, Title, Ul, Li } from '../styles/publish_rules'

const PublishRules: FC = () => {
  return (
    <Wrapper>
      <Ul>
        <Title>规则与边界</Title>
        <Li>
          找/换工作对于双方来讲都有着很高的试错和时间成本，真实和坦诚是沟通的前提。
        </Li>
        <Li>
          如果你所属的公司超过 100 人，并且如果你不是 CEO 或要招聘
          CEO，只需要描述你所在组的情况即可，这样会节省很多不必要沟通成本。
        </Li>
        <Li>
          请选择合适的标签，城市，技术等标签也会同步本帖到相关的子社区中,
          便于有意向的人分类查找。
        </Li>
        <Li>
          标签能提供的信息（比如薪资，城市，技术方向等）在帖子的标题中不必重复。
        </Li>
        <Li>请不要在一篇帖子里同时招聘多种职位，这会被视作猎头行为。</Li>
        <Li>With all due respect, 请勿发布猎头职位，</Li>
      </Ul>
    </Wrapper>
  )
}

export default memo(PublishRules)
