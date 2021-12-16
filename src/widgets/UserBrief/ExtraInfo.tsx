import { FC, memo, Fragment } from 'react'
import { startsWith } from 'ramda'

import type { TUser } from '@/spec'

import { Section, ICON, Desc, LinkValue, BlogLink } from './styles/extra_info'

// github 比较特殊一点，前端做处理比较方便
const githubUserName = (link: string): string => {
  if (link && startsWith('https://github.com/', link)) {
    return link.slice(19)
  }

  return link
}

type TProps = {
  user: TUser
}

const ExtraInfo: FC<TProps> = ({ user }) => {
  return (
    <Fragment>
      {user.location && (
        <Section>
          <ICON.CityIcon />
          <Desc>{user.location}</Desc>
        </Section>
      )}

      {user.social?.company && (
        <Section>
          <ICON.CompanyIcon />
          <Desc>{user.social?.company}</Desc>
        </Section>
      )}

      {user.social?.blog && (
        <Section>
          <ICON.BlogIcon />
          <BlogLink href={user.social?.blog} target="_blank">
            {user.social?.blog}
          </BlogLink>
        </Section>
      )}

      {user.social?.github && (
        <Section>
          <ICON.GithubIcon />
          <LinkValue
            href={`https://github.com/${githubUserName(user.social.github)}`}
            target="_blank"
          >
            {githubUserName(user.social.github)}
          </LinkValue>
        </Section>
      )}

      {user.social?.twitter && (
        <Section>
          <ICON.TwitterIcon />
          <LinkValue
            href={`https://twitter.com/${user.social.twitter}`}
            target="_blank"
          >
            {user.social.twitter}
          </LinkValue>
        </Section>
      )}

      {user.email && (
        <Section>
          <ICON.MailIcon />
          <LinkValue>{user.email}</LinkValue>
        </Section>
      )}
    </Fragment>
  )
}

export default memo(ExtraInfo)
