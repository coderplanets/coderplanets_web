import React from 'react'

import { makeDebugger } from '../../utils'

import { ICON_ASSETS } from '../../config'
import { Input } from '../../components'
import {
  Wrapper,
  InputWrapper,
  SocialIconsWrapper,
  SocialIcon,
  FormItemWrapper,
  FormLable,
  FormInput,
  AddonAddr,
  AddOnIcon,
  UpIcon,
  DownIcon,
  TogglerLabelWrapper,
  TogglerTextWrapper,
  TogglerDivider,
  TogglerLabelText,
  TogglerText,
} from './styles/social_editor'

import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:AccountEditor')
/* eslint-enable no-unused-vars */

const SocialPrefix = ({ prefix }) => <AddonAddr>{prefix}</AddonAddr>

const SocialItem = ({ label, prefix, value, icon, onChange }) => (
  <FormItemWrapper>
    <FormLable>{label}</FormLable>

    <FormInput>
      <Input
        addonBefore={<SocialPrefix prefix={prefix} />}
        addonAfter={<AddOnIcon src={`${ICON_ASSETS}/cmd/${icon}.svg`} />}
        onChange={onChange}
        value={value}
      />
    </FormInput>
  </FormItemWrapper>
)

const FormItem = ({ label, value, icon, onChange }) => (
  <FormItemWrapper>
    <FormLable>{label}</FormLable>

    <FormInput>
      <Input
        size="default"
        value={value}
        addonAfter={<AddOnIcon src={`${ICON_ASSETS}/cmd/${icon}.svg`} />}
        onChange={onChange}
      />
    </FormInput>
  </FormItemWrapper>
)

const SocialIconList = ({ show }) => (
  <FormItemWrapper>
    <FormLable>社交账号:</FormLable>

    <SocialIconsWrapper>
      <SocialIcon src={`${ICON_ASSETS}/cmd/github.svg`} />
      <SocialIcon src={`${ICON_ASSETS}/cmd/weixin.svg`} />
      <SocialIcon src={`${ICON_ASSETS}/cmd/qq.svg`} />
      <SocialIcon src={`${ICON_ASSETS}/cmd/weibo.svg`} />
      <SocialIcon src={`${ICON_ASSETS}/cmd/twitter.svg`} />
      <SocialIcon src={`${ICON_ASSETS}/cmd/facebook.svg`} />
      <SocialIcon src={`${ICON_ASSETS}/cmd/instagram.svg`} />
      <SocialIcon src={`${ICON_ASSETS}/cmd/zhihu.svg`} />
      <SocialIcon src={`${ICON_ASSETS}/cmd/dribble.svg`} />
      <SocialIcon src={`${ICON_ASSETS}/cmd/huaban.svg`} />
      <SocialIcon src={`${ICON_ASSETS}/cmd/pinterest.svg`} />
      <SocialIcon src={`${ICON_ASSETS}/cmd/douban.svg`} />
      <TogglerTextWrapper onClick={logic.toggleSocials}>
        {show ? (
          <React.Fragment>
            <TogglerText>... 收起</TogglerText>
            <UpIcon src={`${ICON_ASSETS}/cmd/arrow.svg`} />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <TogglerText>... 展开</TogglerText>
            <DownIcon src={`${ICON_ASSETS}/cmd/arrow.svg`} />
          </React.Fragment>
        )}
      </TogglerTextWrapper>
    </SocialIconsWrapper>
  </FormItemWrapper>
)

const SocialEditor = ({ show, accountInfo }) => {
  return (
    <Wrapper>
      <SocialIconList show={show} />
      <InputWrapper show={show}>
        <SocialItem
          label="Github:"
          prefix="..github.com/"
          value="mydearxym"
          icon="github"
          onChange={debug}
        />
        <SocialItem
          label="知乎:"
          prefix="..zhihu.com/people/"
          value="mydearxym"
          icon="zhihu"
          onChange={debug}
        />
        <SocialItem
          label="豆瓣:"
          prefix="..douban.com/people/"
          value="mydearxym"
          icon="douban"
          onChange={debug}
        />
        <SocialItem
          label="Twitter:"
          prefix="..twitter.com/"
          value="mydearxym"
          icon="twitter"
          onChange={debug}
        />
        <SocialItem
          label="Facebook:"
          prefix="..facebook.com/"
          value="mydearxym"
          icon="facebook"
          onChange={debug}
        />
        <SocialItem
          label="Dribbble:"
          prefix="..dribbble.com/"
          value="mydearxym"
          icon="dribble"
          onChange={debug}
        />
        <SocialItem
          label="Instagram:"
          prefix="..instagram.com/"
          value="mydearxym"
          icon="instagram"
          onChange={debug}
        />
        <SocialItem
          label="Pinterest:"
          prefix="..pinterest.com/"
          value="mydearxym"
          icon="pinterest"
          onChange={debug}
        />
        <SocialItem
          label="花瓣:"
          prefix="..huaban.com/p/"
          value="mydearxym"
          icon="huaban"
          onChange={debug}
        />

        <SocialItem
          label="微博:"
          prefix="..weibo.com/"
          value="mydearxym"
          icon="weibo"
          onChange={debug}
        />

        <FormItem
          label="QQ:"
          value={accountInfo.qq}
          icon="qq"
          onChange={logic.profileChange('qq')}
        />
        <FormItem
          label="微信:"
          icon="weixin"
          value={accountInfo.weichat}
          onChange={logic.profileChange('weichat')}
        />
        <TogglerLabelWrapper show={show}>
          <TogglerDivider />
          <TogglerLabelText onClick={logic.toggleSocials}>
            收起社交信息
          </TogglerLabelText>
          <TogglerDivider />
        </TogglerLabelWrapper>
      </InputWrapper>
    </Wrapper>
  )
}

export default SocialEditor
