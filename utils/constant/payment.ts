import type { TPaymentUsage, TPaymentMethod } from '@/spec'

export const PAYMENT_USAGE = {
  SENIOR: 'SENIOR',
  GIRLS_CODE_TOO_PLAN: 'GIRLS_CODE_TOO_PLAN',
  DONATE: 'DONATE',
  SPONSOR: 'SPONSOR',
} as Record<Uppercase<TPaymentUsage>, Uppercase<TPaymentUsage>>

export const PAYMENT_METHOD = {
  ALIPAY: 'ALIPAY',
  WECHAT: 'WECHAT',
} as Record<Uppercase<TPaymentMethod>, Uppercase<TPaymentMethod>>
