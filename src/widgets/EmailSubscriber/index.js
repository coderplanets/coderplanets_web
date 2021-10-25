/*
 *
 * EmailSubscriber
 *
 */

import React from 'react'
import T from 'prop-types'

import DefaultLayout from './DefaultLayout/index'
import SimpleLayout from './SimpleLayout'

import { Wrapper } from './styles'

const EmailSubscriber = ({
  testid,
  title,
  desc,
  type,
  placeholder,
  activeByDefault,
}) => {
  return (
    <Wrapper testid={testid}>
      {type === 'default' ? (
        <DefaultLayout
          activeByDefault={activeByDefault}
          title={title}
          desc={desc}
        />
      ) : (
        <SimpleLayout placeholder={placeholder} />
      )}
    </Wrapper>
  )
}

EmailSubscriber.propTypes = {
  testid: T.string,
  title: T.string,
  desc: T.string,
  placeholder: T.string,
  type: T.oneOf(['default', 'simple']),
  // only works when type is default
  // means expand the subscription by default
  activeByDefault: T.bool,
  // withHoverHint: T.bool,
}

EmailSubscriber.defaultProps = {
  testid: 'emailSubscriber',
  title: '邮件订阅',
  desc: '可随时取消',
  placeholder: '邮件订阅',
  type: 'default',
  activeByDefault: false,
  // withHoverHint: false,
}

export default React.memo(EmailSubscriber)
