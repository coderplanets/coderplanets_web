/*
* AppStore store test
*
*/

import AppStore from './index'

it('mini test', () => {
  const app = AppStore.create({}, { allMenuItems: [] })
  expect(app.version).toBe('0.0.1')
})
