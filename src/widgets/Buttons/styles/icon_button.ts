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

import ActivityIcon from '@/icons/article/Activity'
import ArchivedIcon from '@/icons/article/Archived'

import CollectionIcon from '@/icons/CollectionBookmark'
import ShareIcon from '@/icons/Share'

// import CloseCross from '@/icons/CloseCross'
// import AirBalloon from '@/icons/AirBalloon'

import type { TProps as TIconButtonProps } from '../IconButton'

const CloseCross = dynamic(() => import('@/icons/CloseCross'), {
  ssr: false,
})

const AirBalloon = dynamic(() => import('@/icons/AirBalloon'), {
  ssr: false,
})

type TWrapper = Omit<TIconButtonProps, 'path'>
export const Wrapper = styled.div<TWrapper>`
  ${css.flex('align-both')};
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};

  margin-left: ${({ mLeft }) => `${mLeft}px`};
  margin-right: ${({ mRight }) => `${mRight}px`};
  margin-top: ${({ mTop }) => `${mTop}px`};
  margin-bottom: ${({ mBottom }) => `${mBottom}px`};
`
type TIcon = { size: number; $dimWhenIdle: boolean } & TSpace & TActive
export const Icon = styled(Img)<TIcon>`
  fill: ${({ $active }) => ($active ? '#00a59b' : theme('thread.extraInfo'))};
  ${({ size }) => css.size(size)};

  opacity: ${({ $dimWhenIdle }) => ($dimWhenIdle ? 0.7 : 1)};

  &:hover {
    fill: #00a59b;
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
      fill: #00a59b;
      opacity: 1;
      cursor: pointer;
    }

    transition: fill 0.2s;
  `
}

export const Hint = styled.div`
  color: ${theme('thread.extraInfo')};
  text-align: center;
  min-width: 80px;
  padding: 5px;
`
