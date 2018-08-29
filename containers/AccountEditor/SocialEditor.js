import React from 'react'
import shortid from 'shortid'

import { makeDebugger, nilOrEmpty } from '../../utils'

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

import { socialOptions } from './metrics'
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
        addonAfter={
          <AddOnIcon
            src={`${ICON_ASSETS}/cmd/${icon}.svg`}
            active={!nilOrEmpty(value)}
          />
        }
        onChange={onChange}
        value={value}
      />
    </FormInput>
  </FormItemWrapper>
)

const SocialIconList = ({ show, user }) => (
  <FormItemWrapper>
    <FormLable>社交账号:</FormLable>

    <SocialIconsWrapper>
      {socialOptions.map(social => (
        <SocialIcon
          key={shortid.generate()}
          src={`${ICON_ASSETS}/cmd/${social.key}.svg`}
          active={!nilOrEmpty(user[social.key])}
        />
      ))}

      <TogglerTextWrapper onClick={logic.toggleSocials}>
        {show ? (
          <React.Fragment>
            <TogglerText>... 收起</TogglerText>
            <UpIcon src={`${ICON_ASSETS}/cmd/arrow.svg`} />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <TogglerText>... 编辑</TogglerText>
            <DownIcon src={`${ICON_ASSETS}/cmd/arrow.svg`} />
          </React.Fragment>
        )}
      </TogglerTextWrapper>
    </SocialIconsWrapper>
  </FormItemWrapper>
)

const SocialEditor = ({ show, user }) => (
  <Wrapper>
    <SocialIconList show={show} user={user} />
    <InputWrapper show={show}>
      {/* eslint-disable react/jsx-key */}
      {/* set key to SocialItem will cause input lose focus */}
      {socialOptions.map(social => (
        <SocialItem
          label={social.label}
          prefix={social.prefix}
          icon={social.key}
          value={user[social.key]}
          onChange={logic.profileChange(social.key)}
        />
      ))}
      {/* eslint-enable react/jsx-key */}
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

export default SocialEditor
