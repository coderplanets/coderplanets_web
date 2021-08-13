import type { TPaymentUsage, TPaymentMethod } from '@/spec'

export const PAYMENT_USAGE = {
  SENIOR: 'SENIOR' as TPaymentUsage,
  GIRLS_CODE_TOO_PLAN: 'GirlsCodeTooPlan' as TPaymentUsage,
  DONATE: 'DONATE' as TPaymentUsage,
  SPONSOR: 'SPONSOR' as TPaymentUsage,
}

export const PAYMENT_METHOD = {
  ALIPAY: 'ALIPAY' as TPaymentMethod,
  WECHAT: 'WECHAT' as TPaymentMethod,
}
