import { nanoid } from 'nanoid'

const uid = {
  gen: () => nanoid(5),
}

export default uid
