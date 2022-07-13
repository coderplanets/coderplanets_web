export type TArticleThread =
  | 'post'
  | 'job'
  | 'repo'
  | 'meetup'
  | 'blog'
  | 'radar'
  | 'works'
  // for groupher
  | 'changelog'
  | 'kanban'
  | 'help'
  | 'about'

export type TThread =
  | TArticleThread
  | 'cper'
  | 'dashboard'
  | 'map'
  | 'kanban'
  | 'product'
  | 'team'
  | 'interview'
  | 'account'
  | 'guide'
