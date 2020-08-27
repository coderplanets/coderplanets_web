import React from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@/config'

import Detail from './Detail'

import {
  Wrapper,
  InnerWrapper,
  SubscribeBtn,
  SubscribeIcon,
  Desc,
} from '../styles/actions'

import { changeView } from '../logic'

const Actions = ({ view, testId }) => {
  return (
    <Wrapper testId={testId}>
      <InnerWrapper>
        {view === 'default' ? (
          <>
            <SubscribeBtn onClick={() => changeView('detail')}>
              <SubscribeIcon src={`${ICON_CMD}/header/more_subscribe.svg`} />
              订阅内容
            </SubscribeBtn>
            <Desc>可随时取消订阅</Desc>
          </>
        ) : (
          <Detail />
        )}
      </InnerWrapper>
    </Wrapper>
  )
}

Actions.propTypes = {
  view: T.oneOf(['default', 'detail']).isRequired,
  testId: T.string,
}

Actions.defaultProps = {
  testId: 'subscribe-actions',
}

export default React.memo(Actions)
