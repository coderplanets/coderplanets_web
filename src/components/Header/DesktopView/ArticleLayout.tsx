/*
 *
 * Header
 *
 */

import { FC } from 'react'

import { ICON } from '@/config'
import { buildLog } from '@/utils/logger'

import Navigator from '@/components/Navigator'

import type { TProps } from '../index'
import {
  Wrapper,
  InnerWrapper,
  RouterWrapper,
  Operations,
  MoreIcon,
} from '../styles/desktop_view/article_layout'

/* eslint-disable-next-line */
const log = buildLog('C:Header')

const ArticleHeader: FC<TProps> = ({ metric, c11n, community }) => {
  return (
    <Wrapper id="whereCallShowDoraemon" testid="header" noBorder>
      <InnerWrapper>
        <RouterWrapper metric={metric}>
          <Navigator
            community={community}
            layout={c11n.bannerLayout}
            metric={metric}
          />
        </RouterWrapper>
        <Operations metric={metric}>
          <MoreIcon src={`${ICON}/shape/more-box.svg`} />
        </Operations>
      </InnerWrapper>
    </Wrapper>
  )
}

export default ArticleHeader
