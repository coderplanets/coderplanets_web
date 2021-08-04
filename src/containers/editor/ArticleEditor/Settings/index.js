import React from 'react'

import { ICON } from '@/config'

import ArrowButton from '@/components/Buttons/ArrowButton'
import Button from '@/components/Buttons/Button'
import SectionLabel from '@/components/SectionLabel'
import Checker from '@/components/Checker'
import Select from '@/components/Select'

import { Wrapper, ContentWrapper, CheckItem, Footer } from '../styles/settings'
import { previousStep, nextStep } from '../logic'

const communityOptions = [
  { value: 'javascript', label: 'javascript', desc: '前端 javascript 相关' },
  { value: 'elixir', label: 'elixir', desc: 'elixir 编程语言' },
]

const tagOptions = [
  { value: '技术', label: 'Web', desc: '网站，浏览器扩展等' },
  { value: '职场', label: 'iOS', desc: 'App, 平板应用等' },
  { value: '分享', label: 'Android', desc: 'App, 平板应用等' },
  { value: '问答', label: 'Mac' },
  { value: '视频', label: 'Windows' },
]

const Settings = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <SectionLabel
          title="发布到社区"
          desc="帖子所属的社区，发布后只有管理员能移动或同步到其他社区。"
          iconSrc={`${ICON}/shape/planet.svg`}
        />
        <Select options={communityOptions} placeholder="请选择社区" />
        <br />
        <SectionLabel
          title="设置标签"
          desc="帖子相关标签，发布后只有管理员能重新设置或更新标签。"
          iconSrc={`${ICON}/article/tag.svg`}
        />
        <Select options={tagOptions} placeholder="请选择标签" isMulti />
        <br />
        <SectionLabel title="文章设置" iconSrc={`${ICON}/shape/setting.svg`} />
        <CheckItem>
          <Checker
            checked
            // onChange={(checked) => updateWorks('isOSS', checked)}
            // size="small"
          >
            允许评论
          </Checker>
        </CheckItem>
        <CheckItem>
          <Checker
            checked={false}
            // onChange={(checked) => updateWorks('isOSS', checked)}
            // size="small"
          >
            有新评论使用邮件通知我
          </Checker>
        </CheckItem>
        <CheckItem>
          <Checker
            checked={false}
            // onChange={(checked) => updateWorks('isOSS', checked)}
          >
            推荐自己的其他帖子
          </Checker>
        </CheckItem>
      </ContentWrapper>
      <Footer>
        <ArrowButton direction="left" onClick={previousStep} dimWhenIdle>
          返回编辑
        </ArrowButton>
        <Button size="large" type="primary" onClick={nextStep}>
          发&nbsp;布
        </Button>
      </Footer>
    </Wrapper>
  )
}

export default React.memo(Settings)
