/*
 *
 * AccountEditor
 *
 */

import { FC, memo, Fragment } from 'react'

import type { TAccount } from '@/spec'
import { buildLog } from '@/utils/logger'

import { Input, Section, ICON } from './styles/social_inputer'

/* eslint-disable-next-line */
const log = buildLog('C:AccountEditor')

type TProps = {
  account?: TAccount
}

const SocialInputer: FC<TProps> = ({ account }) => {
  return (
    <Fragment>
      <Section>
        <ICON.CityIcon />
        <Input placeholder="// 城市" />
      </Section>
      <Section>
        <ICON.CompanyIcon />
        <Input placeholder="// 公司 / 团队" />
      </Section>
      <Section>
        <ICON.BlogIcon />
        <Input placeholder="// 博客 / 主页" />
      </Section>

      <Section>
        <ICON.GithubIcon />
        <Input placeholder="// Github" />
      </Section>
      <Section>
        <ICON.TwitterIcon />
        <Input placeholder="// Twitter 地址" />
      </Section>
      <Section>
        <ICON.MailIcon />
        <Input placeholder="// 邮箱地址" />
      </Section>
    </Fragment>
  )
}

export default memo(SocialInputer)
