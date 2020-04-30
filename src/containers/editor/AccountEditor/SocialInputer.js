import React from 'react'

import { ICON_CMD } from '@config'
import { buildLog, nilOrEmpty, SOCIAL_LISTS } from '@utils'

import Input from '@components/Input'

import {
  Wrapper,
  InputWrapper,
  SocialIconsWrapper,
  SocialIcon,
  FormItemWrapper,
  FormLable,
  FormInput,
  UpIcon,
  DownIcon,
  TogglerLabelWrapper,
  TogglerTextWrapper,
  TogglerDivider,
  TogglerLabelText,
  TogglerText,
} from './styles/social_inputer'

import { toggleSocials, socialOnChange } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:AccountEditor')

const SocialItem = ({ label, prefix, value, icon, onChange }) => (
  <FormItemWrapper>
    <FormLable>{label}</FormLable>

    <FormInput>
      <Input
        placeholder={prefix}
        suffixIcon={`${ICON_CMD}/${icon}.svg`}
        suffixActive={!nilOrEmpty(value)}
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
      {SOCIAL_LISTS.map(social => (
        <SocialIcon
          key={social.key}
          src={`${ICON_CMD}/${social.key}.svg`}
          active={!nilOrEmpty(user.social[social.key])}
        />
      ))}

      <TogglerTextWrapper onClick={toggleSocials}>
        {show ? (
          <React.Fragment>
            <TogglerText>... 收起</TogglerText>
            <UpIcon src={`${ICON_CMD}/arrow.svg`} />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <TogglerText>... 编辑</TogglerText>
            <DownIcon src={`${ICON_CMD}/arrow.svg`} />
          </React.Fragment>
        )}
      </TogglerTextWrapper>
    </SocialIconsWrapper>
  </FormItemWrapper>
)

const SocialInputer = ({ show, user }) => (
  <Wrapper>
    <SocialIconList show={show} user={user} />
    <InputWrapper show={show}>
      {/* eslint-disable react/jsx-key */}
      {/* set key to SocialItem will cause input lose focus */}
      {SOCIAL_LISTS.map(social => (
        <SocialItem
          key={social.key}
          label={social.label}
          prefix={social.prefix}
          icon={social.key}
          value={user.social[social.key]}
          onChange={socialOnChange(social.key)}
        />
      ))}
      {/* eslint-enable react/jsx-key */}
      <TogglerLabelWrapper show={show}>
        <TogglerDivider />
        <TogglerLabelText onClick={toggleSocials}>
          收起社交信息
        </TogglerLabelText>
        <TogglerDivider />
      </TogglerLabelWrapper>
    </InputWrapper>
  </Wrapper>
)

export default React.memo(SocialInputer)
