import { ICON_BASE } from '@config'
import { uid } from '@utils'

const menu = [
  {
    id: uid.gen(),
    fixedIcon: `${ICON_BASE}/pl/javascript.svg`,
    title: 'Javascript',
    total: Math.floor(Math.random() * 100) + 1,
  },
  {
    // 非 IT，设计类的网站
    id: uid.gen(),
    fixedIcon: `${ICON_BASE}/pl/ruby.svg`,
    title: 'Ruby',
    total: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: uid.gen(),
    fixedIcon: `${ICON_BASE}/pl/clojure.svg`,
    title: 'Clojure',
    total: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: uid.gen(),
    fixedIcon: `${ICON_BASE}/pl/elixir.svg`,
    title: 'Elixir', // 技术书籍，中文文档, 翻译文章, 国外网校, 比如 https://web.stanford.edu/class/cs224n/
    total: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: uid.gen(),
    fixedIcon: `${ICON_BASE}/pl/scala.svg`,
    title: 'Scala',
    total: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: uid.gen(),
    fixedIcon: `${ICON_BASE}/pl/erlang.svg`,
    title: 'Erlang',
    total: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: uid.gen(),
    fixedIcon: `${ICON_BASE}/pl/php.svg`,
    title: 'php',
    total: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: uid.gen(),
    fixedIcon: `${ICON_BASE}/pl/elm.svg`,
    title: 'elm',
    total: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: uid.gen(),
    fixedIcon: `${ICON_BASE}/pl/go.svg`,
    title: 'go',
    total: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: uid.gen(),
    fixedIcon: `${ICON_BASE}/pl/java.svg`,
    title: 'java',
    total: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: uid.gen(),
    fixedIcon: `${ICON_BASE}/pl/kotlin.svg`,
    title: 'kotlin',
    total: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: uid.gen(),
    fixedIcon: `${ICON_BASE}/pl/lisp.svg`,
    title: 'lisp',
    total: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: uid.gen(),
    fixedIcon: `${ICON_BASE}/pl/ocaml.svg`,
    title: 'ocaml',
    total: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: uid.gen(),
    fixedIcon: `${ICON_BASE}/pl/perl.svg`,
    title: 'perl',
    total: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: uid.gen(),
    fixedIcon: `${ICON_BASE}/pl/python.svg`,
    title: 'python',
    total: Math.floor(Math.random() * 100) + 1,
  },
]

export default menu
