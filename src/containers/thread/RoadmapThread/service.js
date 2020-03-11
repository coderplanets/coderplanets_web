import { network } from '@utils'

async function examplePost(params) {
  return network.post('/nowhere', params)
}

export default {
  examplePost,
}
