import type { TSimpleUser } from './account'
// see https://stackoverflow.com/a/67301712/4050784
// TODO: move tu utils
type TTitleCase<T extends string, D extends string = ' '> = string extends T
  ? never
  : T extends `${infer F}${D}${infer R}`
  ? `${Capitalize<F>}${D}${TTitleCase<R, D>}`
  : Capitalize<T>

export type TEmotionType =
  | 'downvote'
  | 'beer'
  | 'heart'
  | 'confused'
  | 'popcorn'
  | 'pill'

export type TEmotionCountKey = `${TEmotionType}Count`
export type TEmotionViewerHasKey = `viewerHas${TTitleCase<TEmotionType>}ed`

export type TEmotion = {
  [key: string]: number | boolean | string | TSimpleUser[]
  // [key in TEmotionCountKey]: number
  // [key in TEmotionViewerHasKey]: boolean
  // [key in TEmotionType]: number
  // [key in TEmotionViewerHasKey]: boolean
}
