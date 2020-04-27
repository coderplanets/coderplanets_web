import { ICON_BASE } from '@config'
import { uid } from '@utils'

const menu = [
  {
    id: uid.gen(),
    fixedIcon: `${ICON_BASE}/pl/javascript.png`,
    title: 'Javascript',
    total: Math.floor(Math.random() * 100) + 1,
  },
  {
    // 非 IT，设计类的网站
    id: uid.gen(),
    fixedIcon: `${ICON_BASE}/pl/ruby.png`,
    title: 'Ruby',
    total: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: uid.gen(),
    fixedIcon: `${ICON_BASE}/pl/clojure.png`,
    title: 'Clojure',
    total: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: uid.gen(),
    fixedIcon: `${ICON_BASE}/pl/elixir.png`,
    title: 'Elixir', // 技术书籍，中文文档, 翻译文章, 国外网校, 比如 https://web.stanford.edu/class/cs224n/
    total: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: uid.gen(),
    fixedIcon: `${ICON_BASE}/pl/scala.png`,
    title: 'Scala',
    total: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: uid.gen(),
    fixedIcon: `${ICON_BASE}/pl/erlang.png`,
    title: 'Erlang',
    total: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: uid.gen(),
    fixedIcon: `${ICON_BASE}/pl/php.png`,
    title: 'php',
    total: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: uid.gen(),
    fixedIcon: `${ICON_BASE}/pl/elm.png`,
    title: 'elm',
    total: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: uid.gen(),
    fixedIcon: `${ICON_BASE}/pl/go.png`,
    title: 'go',
    total: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: uid.gen(),
    fixedIcon: `${ICON_BASE}/pl/java.png`,
    title: 'java',
    total: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: uid.gen(),
    fixedIcon: `${ICON_BASE}/pl/kotlin.png`,
    title: 'kotlin',
    total: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: uid.gen(),
    fixedIcon: `${ICON_BASE}/pl/lisp.png`,
    title: 'lisp',
    total: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: uid.gen(),
    fixedIcon: `${ICON_BASE}/pl/ocaml.png`,
    title: 'ocaml',
    total: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: uid.gen(),
    fixedIcon: `${ICON_BASE}/pl/perl.png`,
    title: 'perl',
    total: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: uid.gen(),
    fixedIcon: `${ICON_BASE}/pl/python.png`,
    title: 'python',
    total: Math.floor(Math.random() * 100) + 1,
  },
]

export default menu
