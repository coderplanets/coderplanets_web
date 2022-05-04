import { FC } from 'react'
import dynamic from 'next/dynamic'
import styled from 'styled-components'

import type { TActive, TSpace } from '@/spec'
import { SVG } from '@/constant'

import Img from '@/Img'
import css, { theme } from '@/utils/css'

import UpvoteIcon from '@/icons/Upvote'
import EditPenIcon from '@/icons/EditPen'
import LockIcon from '@/icons/Lock'
import ExpandIcon from '@/icons/Expand'
import FoldIcon from '@/icons/Fold'
import Emotion from '@/icons/Emotion'
import CommentIcon from '@/icons/Comment'

import ActivityIcon from '@/icons/article/Activity'
import ArchivedIcon from '@/icons/article/Archived'

import CollectionIcon from '@/icons/CollectionBookmark'
import ShareIcon from '@/icons/Share'
import MoreLIcon from '@/icons/MoreL'
import MoreIcon from '@/icons/More'

// import CloseCross from '@/icons/CloseCross'
// import AirBalloon from '@/icons/AirBalloon'

import type { TProps as TIconButtonProps } from '../IconButton'

const CloseCross = dynamic(() => import('@/icons/CloseLight'), {
  ssr: false,
})

const AirBalloon = dynamic(() => import('@/icons/AirBalloon'), {
  ssr: false,
})

type TWrapper = Omit<TIconButtonProps, 'path'>
export const Wrapper = styled.div<TWrapper>`
  position: relative;
  ${({ size }) => css.size(size)}
  ${css.flex('align-both')};

  margin-left: ${({ mLeft }) => `${mLeft}px`};
  margin-right: ${({ mRight }) => `${mRight}px`};
  margin-top: ${({ mTop }) => `${mTop}px`};
  margin-bottom: ${({ mBottom }) => `${mBottom}px`};

  /* &:before {
    content: '';
    ${({ size }) => css.circle(size + 2)};
    background: ${theme('hoverBg')};
  } */
`
export const Content = styled.div`
  z-index: 2;
`
export const HoverBg = styled.div<{ size: number }>`
  position: absolute;
  ${({ size }) => css.circle(size + 4)};
  left: -2px;
  top: -2px;
  background: ${theme('hoverBg')};
  opacity: 0;
  cursor: pointer;

  ${Wrapper}:hover & {
    opacity: 1;
  }

  transition: 0.25s;
`
type TIcon = { size: number; $dimWhenIdle: boolean } & TSpace & TActive
export const Icon = styled(Img)<TIcon>`
  fill: ${({ $active }) => ($active ? '#00a59b' : theme('thread.extraInfo'))};
  ${({ size }) => css.size(size)};

  opacity: ${({ $dimWhenIdle }) => ($dimWhenIdle ? 0.7 : 1)};

  &:hover {
    fill: ${theme('thread.extraInfo')};
    opacity: 1;
    cursor: pointer;
  }

  transition: fill 0.2s;
`

export const getIcon = (type: string): FC<TIcon> => {
  switch (type) {
    case SVG.UPVOTE: {
      return getStyledIcon(UpvoteIcon)
    }

    case SVG.EDIT_PEN: {
      return getStyledIcon(EditPenIcon)
    }

    case SVG.LOCK: {
      return getStyledIcon(LockIcon)
    }

    case SVG.EXPAND: {
      return getStyledIcon(ExpandIcon)
    }

    case SVG.FOLD: {
      return getStyledIcon(FoldIcon)
    }

    case SVG.COLLECTION: {
      return getStyledIcon(CollectionIcon)
    }

    case SVG.SHARE: {
      return getStyledIcon(ShareIcon)
    }

    case SVG.ARCHIVED: {
      return getStyledIcon(ArchivedIcon)
    }

    case SVG.ACTIVITY: {
      return getStyledIcon(ActivityIcon)
    }

    case SVG.CLOSE: {
      // @ts-ignore
      return getStyledIcon(CloseCross)
    }

    case SVG.TO_TOP: {
      // @ts-ignore
      return getStyledIcon(AirBalloon)
    }

    case SVG.EMOTION: {
      return getStyledIcon(Emotion)
    }
    case SVG.COMMENT: {
      return getStyledIcon(CommentIcon)
    }
    case SVG.MOREL: {
      return getStyledIcon(MoreLIcon)
    }
    case SVG.MORE: {
      return getStyledIcon(MoreIcon)
    }
    default: {
      return getStyledIcon(UpvoteIcon)
    }
  }
}

export const getStyledIcon = (comp: FC): FC<TIcon> => {
  return styled(comp)<TIcon>`
    fill: ${({ $active }) => ($active ? '#00a59b' : theme('thread.extraInfo'))};
    ${({ size }) => css.size(size)};

    opacity: ${({ $dimWhenIdle }) => ($dimWhenIdle ? 0.7 : 1)};

    &:hover {
      fill: ${theme('thread.extraInfo')};
      opacity: 1;
      cursor: pointer;
    }

    transition: all 0.2s;
  `
}

export const Hint = styled.div`
  color: ${theme('thread.extraInfo')};
  text-align: center;
  min-width: 80px;
  padding: 5px;
`
