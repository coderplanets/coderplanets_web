import { FC, memo, Fragment } from 'react'

import type { TUser } from '@/spec'
import { Section, ICON, Desc } from './styles/extra_info'

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
        <Desc>https://mydearxym.qq.com</Desc>
      </Section>
      <Section>
        <ICON.GithubIcon />
        <Desc>mydearxym</Desc>
      </Section>
      <Section>
        <ICON.TwitterIcon />
        <Desc>mydearxym</Desc>
      </Section>
      <Section>
        <ICON.MailIcon />
        <Desc>mydearxym@qq.com</Desc>
      </Section>
    </Fragment>
  )
}

export default memo(ExtraInfo)
