/*
 *
 * SubTitle
 *
 */

import { FC, memo, ReactNode } from 'react'
import Router from 'next/router'

import { buildLog } from '@/utils/logger'
import ArrowButton from '@/widgets/Buttons/ArrowButton'

import { Wrapper, Title, OptionWrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('w:SubTitle:index')

type TProps = {
  testid?: string
  children: ReactNode
  withMore?: boolean
  moreLink?: string
}

const SubTitle: FC<TProps> = ({
  testid = 'subTitle',
  children,
  withMore = false,
  moreLink = '/',
}) => {
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

export default memo(SubTitle)
