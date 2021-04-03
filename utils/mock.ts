import { getRandomInt } from './helper'

const images = [
  'https://rmt.dogedoge.com/fetch/~/source/unsplash/photo-1557555187-23d685287bc3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80',
  'https://rmt.dogedoge.com/fetch/~/source/unsplash/photo-1484399172022-72a90b12e3c1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80',
  'https://rmt.dogedoge.com/fetch/~/source/unsplash/photo-1617419086540-518c5b847b88?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
  'https://rmt.dogedoge.com/fetch/~/source/unsplash/photo-1617365564200-c6b079284290?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  'https://rmt.dogedoge.com/fetch/~/source/unsplash/photo-1617391765934-f7ac7aa648bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=642&q=80',
  'https://rmt.dogedoge.com/fetch/~/source/unsplash/photo-1611095973362-88e8e2557e58?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
]

export const mockImage = (): string => {
  return images[getRandomInt(0, 4)]
}

export const mockImages = (num: number): string[] => {
  return images.slice(0, Math.min(num, images.length - 1))
}
