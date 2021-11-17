import { FC, memo, useState, Fragment, useCallback } from 'react'

import { ROUTE } from '@/constant'
import Linker from '@/widgets/Linker'

import {
  Wrapper,
  ToggleTitle,
  Section,
  TitleSection,
  DoTitle,
  DoNotTitle,
  Ul,
  Li,
  Bold,
  Strike,
} from '../styles/content/publish_rules'

const PublishRules: FC = () => {
  const [showDetail, setShowDetail] = useState(false)

  const toggleDetail = useCallback(() => {
    setShowDetail(!showDetail)
  }, [showDetail])

  return (
    <Wrapper>
      <ToggleTitle onClick={toggleDetail} showDetail={showDetail}>
        {!showDetail ? (
          <Fragment>发布须知</Fragment>
        ) : (
          <Fragment>收起</Fragment>
        )}
      </ToggleTitle>
      {showDetail && (
        <Fragment>
          <Section>
            <TitleSection>
              <DoTitle>欢迎发布</DoTitle>
            </TitleSection>
            <Ul>
              <Li>
                各平台能提升开发者 / 设计师 / 产品 / 数据分析 /
                运营等生产效率的软件工具，插件或服务。
              </Li>
              <Li>你参与编写或设计的库、框架、算法等各种作品。</Li>
              <Li>字体、图标、UI/UX模板手稿等人机交互类的设计资源或服务。</Li>
              <Li>
                各种辅助管理、DevOps、信息收集协作类工具或相关基础设施服务。
              </Li>
              <Li>创意周边、硬件 / 物联网、VR、机器人等有意思的极客项目。</Li>
            </Ul>
          </Section>
          <Section>
            <TitleSection>
              <DoNotTitle>不适合发布</DoNotTitle>
            </TitleSection>
            <Ul>
              <Li>
                纯 APP / 小程序项目。虽然有例外，但大部分生产端工具都是桌面 /
                网站类项目 (或至少是重要组成部分)。 如果你的作品是例外，请忽略。
              </Li>
              <Li>
                Markdown 类项目, 包括但不限于排行榜, 资料收集,
                面经题库，课程培训等。
              </Li>
              <Li>导航类项目，包括但不限于 xx 导航，xx 热榜等。</Li>
              <Li>后台管理模板，xx 商城系统，xx 手脚架。</Li>
              <Li>灰色项目，以及对国外同类产品“爱情公寓”式的抄袭之作。</Li>
              <Li>
                和极客群体关系不大的项目。
                简单来讲，如果你要发布的产品主要目标用户 /
                内测用户不是面向开发者或 IT 从业者，那么通常就不适合。
                这里是垂直类社区，
                <Bold>不是 APP 应用商店</Bold>。
              </Li>
              <Li>
                肝了“三天”的 <Strike>Demo</Strike> 项目。idea 或超早期 MVP
                请移步
                <Linker
                  src="/makers"
                  external={false}
                  text="Makers"
                  inline
                  left={4}
                  right={4}
                />
                发帖讨论。
              </Li>
              <Li>
                <Bold>你没有参与的项目</Bold>
                。如果你是个喜欢收集各种工具或服务的 Hunter，
                <Linker
                  src={`/${ROUTE.COOL_GUIDE}`}
                  external={false}
                  text="酷导航"
                  inline
                  right={4}
                />
                是更合适的地方。
              </Li>
            </Ul>
          </Section>
        </Fragment>
      )}
    </Wrapper>
  )
}

export default memo(PublishRules)
