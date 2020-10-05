import React from 'react'

import { ICON_CMD, EMAIL_BUSINESS } from '@/config'
import { Wrapper, MailIcon, Title, MailLink } from './styles/business_note'

const BusinessNote = () => (
  <Wrapper>
    <MailIcon src={`${ICON_CMD}/business_mail.svg`} />
    <Title>希望 coderplanets 能与您一起成长</Title>
    <MailLink href={`mailto:${EMAIL_BUSINESS}`}>{`${EMAIL_BUSINESS}`}</MailLink>
  </Wrapper>
)

export default React.memo(BusinessNote)
