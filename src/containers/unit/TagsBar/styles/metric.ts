import { nilOrEmpty } from '@/utils'

export const getActiveColor = (
  active: boolean,
  color: string,
  activeid: string | null,
): string => {
  if (!nilOrEmpty(activeid)) return active ? color : '#497684'

  return !active ? color : '#497684'
}

export const holder = 1
