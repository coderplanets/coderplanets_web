import { FC, memo, Fragment } from 'react'

import type { TUser } from '@/spec'

import { Section, ICON, Desc, LinkValue, BlogLink } from './styles/extra_info'

type TProps = {
  user: TUser
}

const ExtraInfo: FC<TProps> = ({ user }) => {
  return (
    <Fragment>
      <Section>
        <ICON.CityIcon />
        <Desc>成都</Desc>
      </Section>
      <Section>
        <ICON.CompanyIcon />
        <Desc>Groupher</Desc>
      </Section>
      <Section>
        <ICON.BlogIcon />
        <BlogLink href="https://mydearxym.qq.com" target="_blacnk">
          https://mydearxym.qq.com
        </BlogLink>
      </Section>
      <Section>
        <ICON.GithubIcon />
        <LinkValue>mydearxym</LinkValue>
      </Section>
      <Section>
        <ICON.TwitterIcon />
        <LinkValue>mydearxym</LinkValue>
      </Section>
      <Section>
        <ICON.MailIcon />
        <LinkValue>mydearxym@qq.com</LinkValue>
      </Section>
    </Fragment>
  )
}

export default memo(ExtraInfo)
