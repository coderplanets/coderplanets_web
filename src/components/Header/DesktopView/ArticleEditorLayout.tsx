/*
 *
 * Header
 *
 */

import { FC } from 'react'

import { ICON } from '@/config'
import Navigator from '@/components/Navigator'

import type { TProps } from '../index'
import {
  Wrapper,
  InnerWrapper,
  RouterWrapper,
  Operations,
  MoreIcon,
} from '../styles/desktop_view/article_editor_layout'

const ArticleEditorHeader: FC<TProps> = ({ metric, c11n, community }) => {
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
        <Operations>
          <MoreIcon src={`${ICON}/shape/more-box.svg`} />
        </Operations>
      </InnerWrapper>
    </Wrapper>
  )
}

export default ArticleEditorHeader
