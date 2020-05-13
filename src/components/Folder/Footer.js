import React from 'react'
import TimeAgo from 'timeago-react'

import { ICON_CMD } from '@/config'

import { Wrapper, Title, Intro, Total, Update, LockIcon } from './styles/footer'

const Footer = ({ title, total, updatedAt, lock, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <Title>
        {title}
        {lock && <LockIcon src={`${ICON_CMD}/lock.svg`} />}
      </Title>
      <Intro>
        <Total>共 {total} 项</Total>
        <Update>
          <TimeAgo datetime={updatedAt} locale="zh_CN" />
        </Update>
      </Intro>
    </Wrapper>
  )
}

export default React.memo(Footer)
