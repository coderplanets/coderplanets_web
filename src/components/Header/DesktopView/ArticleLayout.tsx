/*
 *
 * Header
 *
 */

import { FC } from 'react'

import { ICON } from '@/config'

import { buildLog } from '@/utils/logger'
import { authWarn } from '@/utils/helper'

import Tooltip from '@/components/Tooltip'
import UserCard from '@/components/Cards/UserCard'
import Navigator from '@/components/Navigator'
import { useAccount } from '@/hooks'

import type { TProps } from '../index'
import {
  Wrapper,
  InnerWrapper,
  RouterWrapper,
  Operations,
  LoginHint,
  MoreIcon,
} from '../styles/desktop_view/article_layout'

/* eslint-disable-next-line */
const log = buildLog('C:Header')

const ArticleHeader: FC<TProps> = ({ metric, c11n, community }) => {
  const { isLogin, user } = useAccount()

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
          {!isLogin ? (
            <LoginHint onClick={() => authWarn({ hideToast: true })}>
              登入
            </LoginHint>
          ) : (
            <Tooltip
              content={<UserCard item={user} />}
              delay={0}
              placement="bottom"
              interactive={false}
            >
              <MoreIcon src={`${ICON}/shape/more-box.svg`} />
            </Tooltip>
          )}
        </Operations>
      </InnerWrapper>
    </Wrapper>
  )
}

export default ArticleHeader
