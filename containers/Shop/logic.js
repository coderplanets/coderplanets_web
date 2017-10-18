import { makeDebugger } from '../../utils/functions'

const debug = makeDebugger('L:shop')

export function hello() {
  debug('hello 2?: ')
}

export function helloFuck() {
  debug('hello fuck??')
}
