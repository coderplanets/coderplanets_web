import type { TContentView, TSubContentView, TAmount } from './spec'

export const SIDEBAR_VIEW = {
  PAY: 'pay' as TContentView,
  QUESTION: 'question' as TContentView,
}

export const SUBCONTENT_VIEW = {
  PAY: 'pay' as TSubContentView,
  CONFIRM: 'question' as TSubContentView,
}

export const AMOUNT = {
  10.24: '10.24' as TAmount,
  51.2: '51.2' as TAmount,
  102.4: '102.4' as TAmount,
  512: '512' as TAmount,
  1024: '1024' as TAmount,
}
