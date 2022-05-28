import type { TArticleState } from '@/spec'
import { ARTICLE_STATE } from '@/constant'

export const isNoBgCase = (
  kanbanLayout: boolean,
  state: TArticleState,
): boolean => {
  return kanbanLayout || state === ARTICLE_STATE.DEFAULT
}

export const getPadding = (
  kanbanLayout: boolean,
  state: TArticleState,
  smaller: boolean,
): number | string => {
  const padding = smaller ? '1px 4px 1px 6px;' : '3px 8px;'

  return isNoBgCase(kanbanLayout, state) ? 0 : padding
}
