/* eslint-disable jsx-a11y/accessible-emoji */
import { FC, memo } from 'react'

import Linker from '@/widgets/Linker'

// import Footer from '../Footer'
// import InputBox from './InputBox'

import {
  Wrapper,
  Block,
  Title,
  Ul,
  Li,
  Strike,
  Bold,
} from '../styles/home_cover'

type TProps = {
  testid?: string
}

const HomeCover: FC<TProps> = ({ testid = 'search-cover' }) => {
  return (
    <Wrapper testid={testid}>
      <Block>
        <Title>关于酷导航</Title>
        <Ul>
          <Li>
            这里收集各种和开发设计群体直接间接相关的，有<Strike>逼格</Strike>
            一定水准的工具、产品、资源以及视角。
          </Li>
          <Li>
            每个条目都会有客观的帖子介绍基本概况、使用场景、公认的一些优缺点等等。
          </Li>
          <Li>
            是否收录与所在地域，是否开源，免费或付费等因素无关，但会列出。
          </Li>
          <Li>
            大多数目录的收录标准只有一个：<Bold>The best or the unique</Bold>
          </Li>
          <Li>不恰烂钱，不讲人情，你行你上。</Li>
        </Ul>
      </Block>
      <Block>
        <Title>当前状态</Title>
        <Ul>
          <Li>
            👈 &nbsp;初始分类及 UI 雏形已完成，欢迎体验后
            <Linker
              src="/feedback"
              external={false}
              text="给我们反馈"
              inline
              left={4}
              right={4}
            />
            。
          </Li>
          <Li>目前已经完成大部分的后端工作。</Li>
          <Li>前端富文本编辑/显示模板还有不少工作量</Li>
          <Li>
            协作编辑，编辑历史，参与贡献体系等已经基本设计完成，但还未正式编写相关模块。
          </Li>
        </Ul>
      </Block>
      <Block>
        {/* <Title>开发计划</Title> */}
        <Ul>
          <Li>
            收集社区
            <Linker
              src="/feedback"
              external={false}
              text="建议反馈"
              inline
              left={4}
              right={4}
            />
            ，完善设计。
          </Li>
          <Li>编码实施。计划在内测阶段完成。</Li>
        </Ul>
      </Block>
      {/* <Br top={10} /> */}
      {/* <InputBox /> */}
      {/* <Br top={15} /> */}
      {/* <Footer mode="cover" /> */}
    </Wrapper>
  )
}

export default memo(HomeCover)
