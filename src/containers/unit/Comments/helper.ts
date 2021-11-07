import type { TComment } from '@/spec'

// see: https://stackoverflow.com/a/66446126/4050784
const DateDiff = {
  inDays: (d1, d2): number => {
    const t2 = d2.getTime()
    const t1 = d1.getTime()

    // @ts-ignore
    return parseInt((t2 - t1) / (24 * 3600 * 1000), 10)
  },

  inWeeks: (d1, d2): number => {
    const t2 = d2.getTime()
    const t1 = d1.getTime()

    // @ts-ignore
    return parseInt((t2 - t1) / (24 * 3600 * 1000 * 7), 10)
  },

  inMonths: (d1, d2): number => {
    const d1Y = d1.getFullYear()
    const d2Y = d2.getFullYear()
    const d1M = d1.getMonth()
    const d2M = d2.getMonth()

    return d2M + 12 * d2Y - (d1M + 12 * d1Y)
  },

  inYears: (d1, d2): number => {
    return d2.getFullYear() - d1.getFullYear()
  },
}

export const passedDate = (
  curComment: TComment | undefined,
  nextComment: TComment | undefined,
): string | null => {
  if (!curComment || !nextComment) return null

  const { insertedAt: curInsertedAt } = curComment
  const { insertedAt: nextInsertedAt } = nextComment

  const diffInDays = DateDiff.inDays(
    new Date(curInsertedAt),
    new Date(nextInsertedAt),
  )

  if (diffInDays >= 5 && diffInDays < 14) {
    return `${diffInDays} 天后`
  }

  if (diffInDays >= 14 && diffInDays < 30) {
    const diffInWeeks = DateDiff.inWeeks(
      new Date(curInsertedAt),
      new Date(nextInsertedAt),
    )
    return `${diffInWeeks} 周后`
  }

  if (diffInDays >= 30 && diffInDays < 365) {
    const diffInMonths = DateDiff.inMonths(
      new Date(curInsertedAt),
      new Date(nextInsertedAt),
    )
    return `${diffInMonths} 月后`
  }

  const diffInYears = DateDiff.inYears(
    new Date(curInsertedAt),
    new Date(nextInsertedAt),
  )
  return diffInYears !== 0 ? `${diffInYears} 年后` : null
}

export const holder = 1
