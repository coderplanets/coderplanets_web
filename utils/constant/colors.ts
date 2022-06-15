import type { TColorName } from '@/spec'

export const COLORS = {
  BLACK: '#333333',
  PINK: '#DA615C',
  RED: '#CD272F',
  ORANGE: '#E36E2F',
  YELLOW: '#F6C95B',
  BROWN: '#8d691e',
  GREEN_LIGHT: '#37B784',
  GREEN: '#007840',
  CYAN: '#007486',
  CYAN_LIGHT: '#00B5CC',
  BLUE: '#0072E3',
  PURPLE: '#596ACE',
} as Record<Uppercase<TColorName>, string>

export const COLOR_NAME = {
  BLACK: 'BLACK',
  PINK: 'PINK',
  RED: 'RED',
  ORANGE: 'ORANGE',
  YELLOW: 'YELLOW',
  BROWN: 'BROWN',
  GREEN_LIGHT: 'GREEN_LIGHT',
  GREEN: 'GREEN',
  CYAN: 'CYAN',
  CYAN_LIGHT: 'CYAN_LIGHT',
  BLUE: 'BLUE',
  PURPLE: 'PURPLE',
} as Record<TColorName, TColorName>
