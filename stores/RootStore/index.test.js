/*
* RootStore store test
*
*/

import RootStore from './index'

const langSetup = {
  testid: 'test',
}

it('mini test', () => {
  const app = RootStore.create({ menuItems: [], appLangs: langSetup })
  expect(app.version).toBe('0.0.1')
})
