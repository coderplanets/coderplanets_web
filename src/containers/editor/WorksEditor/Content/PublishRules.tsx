import { FC, memo, useState, Fragment, useCallback } from 'react'
import Link from 'next/link'

import { ROUTE } from '@/constant'

import {
  Wrapper,
  ToggleTitle,
  Section,
  DoTitle,
  DoNotTitle,
  Ul,
  Li,
  Bold,
  Strike,
  TextLink,
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
            <DoTitle>适合发布:</DoTitle>
            <Ul>
              <Li>
                各平台能提高开发者 / 设计师 / 产品生产力的软件工具，插件或服务。
              </Li>
              <Li>你参与编写和设计的库，框架等各种作品。</Li>
              <Li>字体，图标，UI/UX模板手稿等人机交互类的设计资源或服务。</Li>
              <Li> 各类辅助管理工具或服务。 </Li>
              <Li>品牌，运营，增长，统计等工具或服务。</Li>
              <Li>硬件产品，物联网，VR, 机器人等类似项目。</Li>
            </Ul>
          </Section>
          <Section>
            <DoNotTitle>不适合发布:</DoNotTitle>
            <Ul>
              <Li>
                你没有参与的项目。如果你是个喜欢收集的 Hunter，
                <Link href={`/${ROUTE.COOL_GUIDE}`} passHref>
                  <TextLink>酷导航</TextLink>
                </Link>
                是最合适的地方。
              </Li>
              <Li>
                Markdown 类项目, 包括但不限于排行榜, 资料收集,
                面经题库，课程培训等。
              </Li>
              <Li>聚合类项目，包括但不限于 xx 导航，xx 热榜等。</Li>
              <Li>后台管理模板，xx 商城系统，xx 手脚架。</Li>
              <Li>
                和开发者（广义上包括 IT 从业者）关系不大的项目。
                简单来讲，如果你要发布的项目主要目标用户不是 IT
                从业者，那么通常就不适合。 这里是垂直社区，
                <Bold>不是 APP 应用商店</Bold>。
              </Li>
              <Li>
                三天或一周时间写的 <Strike>Demo</Strike> 项目, 天才例外。
              </Li>
            </Ul>
          </Section>
        </Fragment>
      )}
    </Wrapper>
  )
}

export default memo(PublishRules)
