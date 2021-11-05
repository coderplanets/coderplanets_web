/*
 *
 * AccountEditor
 *
 */

import { FC, memo, Fragment } from 'react'

import type { TAccount } from '@/spec'
import { buildLog } from '@/utils/logger'

import { Input, Section, ICON } from './styles/social_inputer'
import { inputOnChange } from './logic'

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
        <Input
          value={account.location}
          placeholder="// 城市"
          onChange={(e) => inputOnChange(e, 'location')}
        />
      </Section>
      <Section>
        <ICON.CompanyIcon />
        <Input
          value={account.social.company}
          placeholder="// 公司 / 团队"
          onChange={(e) => inputOnChange(e, 'company')}
        />
      </Section>
      <Section>
        <ICON.BlogIcon />
        <Input
          value={account.social.blog}
          placeholder="// 博客 / 主页"
          onChange={(e) => inputOnChange(e, 'blog')}
        />
      </Section>

      <Section>
        <ICON.GithubIcon />
        <Input
          value={account.social.github}
          placeholder="// Github"
          onChange={(e) => inputOnChange(e, 'github')}
        />
      </Section>
      <Section>
        <ICON.TwitterIcon />
        <Input
          value={account.social.twitter}
          placeholder="// Twitter 地址"
          onChange={(e) => inputOnChange(e, 'twitter')}
        />
      </Section>
      <Section>
        <ICON.MailIcon />
        <Input
          value={account.email}
          placeholder="// 邮箱地址"
          onChange={(e) => inputOnChange(e, 'email')}
        />
      </Section>
    </Fragment>
  )
}

export default memo(SocialInputer)
