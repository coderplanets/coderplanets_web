import type { TPay, TPackage } from './spec'

export const PAY = {
  YEARLY: 'yearly' as TPay,
  MONTHLY: 'monthly' as TPay,
}

export const PACKAGE = {
  GIRL: 'girl' as TPackage,
  FREE: 'free' as TPackage,
  ADVANCE: 'advance' as TPackage,
  TEAM: 'team' as TPackage,
}
