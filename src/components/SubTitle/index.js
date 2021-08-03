/*
 *
 * SubTitle
 *
 */

import React from 'react'
import T from 'prop-types'
import Router from 'next/router'

import { buildLog } from '@/utils/logger'
import { ArrowButton } from '@/components/Buttons'

import { Wrapper, Title, OptionWrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:SubTitle:index')

const SubTitle = ({ testid, children, withMore, moreLink }) => {
  return (
    <Wrapper testid={testid}>
      <Title>{children}</Title>
      <OptionWrapper>
        {withMore && (
          <ArrowButton
            size="tiny"
            arrowStyle="simple"
            onClick={() => {
              Router.push(moreLink)
            }}
          >
            更多
          </ArrowButton>
        )}
      </OptionWrapper>
    </Wrapper>
  )
}

SubTitle.propTypes = {
  testid: T.string,
  children: T.oneOfType([T.string, T.node]).isRequired,
  withMore: T.bool,
  moreLink: T.string,
  // className: T.string,
}

SubTitle.defaultProps = {
  testid: 'subTitle',
  withMore: false,
  moreLink: '/',
  // className: '',
}

export default React.memo(SubTitle)
