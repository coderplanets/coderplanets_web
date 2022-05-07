import { FC } from 'react'

import { SVG } from '@/constant'

import UpvoteIcon from './Upvote'
import EditPenIcon from './EditPen'
import LockIcon from './Lock'
import ExpandIcon from './Expand'
import FoldIcon from './Fold'
import Emotion from './Emotion'
import CommentIcon from './Comment'

import ActivityIcon from './article/Activity'
import ArchivedIcon from './article/Archived'

import CollectionIcon from './CollectionBookmark'
import ShareIcon from './Share'
import MoreLIcon from './menu/MoreL'
import MoreIcon from './menu/More'
import MoreDotIcon from './menu/MoreDot'

// social
import WechatIcon from './social/WeChat'
import EmailIcon from './social/Email'

// Menu
import CopyIcon from './menu/Copy'

type TstyledFn = (comp: FC) => FC

export const getLocalSVG = (type: string, styledFn: TstyledFn): FC => {
  switch (type) {
    case SVG.MOREL_DOT: {
      return styledFn(MoreDotIcon)
    }

    case SVG.COPY: {
      return styledFn(CopyIcon)
    }

    case SVG.EMAIL: {
      return styledFn(EmailIcon)
    }

    case SVG.WECHAT: {
      return styledFn(WechatIcon)
    }

    case SVG.UPVOTE: {
      return styledFn(UpvoteIcon)
    }

    case SVG.EDIT_PEN: {
      return styledFn(EditPenIcon)
    }

    case SVG.LOCK: {
      return styledFn(LockIcon)
    }

    case SVG.EXPAND: {
      return styledFn(ExpandIcon)
    }

    case SVG.FOLD: {
      return styledFn(FoldIcon)
    }

    case SVG.COLLECTION: {
      return styledFn(CollectionIcon)
    }

    case SVG.SHARE: {
      return styledFn(ShareIcon)
    }

    case SVG.ARCHIVED: {
      return styledFn(ArchivedIcon)
    }

    case SVG.ACTIVITY: {
      return styledFn(ActivityIcon)
    }

    case SVG.CLOSE: {
      // @ts-ignore
      return styledFn(CloseCross)
    }

    case SVG.TO_TOP: {
      // @ts-ignore
      return styledFn(AirBalloon)
    }

    case SVG.EMOTION: {
      return styledFn(Emotion)
    }
    case SVG.COMMENT: {
      return styledFn(CommentIcon)
    }
    case SVG.MOREL: {
      return styledFn(MoreLIcon)
    }
    case SVG.MORE: {
      return styledFn(MoreIcon)
    }
    default: {
      return styledFn(UpvoteIcon)
    }
  }
}

export const holder = 1
