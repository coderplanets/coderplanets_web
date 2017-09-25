/*
* AppStore store test
*
*/

import AppStore from './index'

const langSetup = {
  testid: 'test',
}

it('mini test', () => {
  const app = AppStore.create({ menuItems: [], appLangs: langSetup })
  expect(app.version).toBe('0.0.1')
})
