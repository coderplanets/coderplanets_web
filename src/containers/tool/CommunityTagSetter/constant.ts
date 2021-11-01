import { ICON_BASE } from '@/config'

import type { TCommunitySetterStyle } from '@/spec'
import type { TTagView, TCommunityView, TType } from './spec'

export const TYPE = {
  MOVE_COMMUNITY: 'move-community' as TType,
  MIRROR_COMMUNITY: 'mirror-community' as TType,
  UNMIRROR_COMMUNITY: 'unmirror-community' as TType,
  SELECT_COMMUNITY: 'select-community' as TType,
  TAG: 'tag' as TType,
}

export const TAG_VIEW = {
  SELECT: 'select' as TTagView,
  UPDATE: 'update' as TTagView,
  DELETE: 'delete' as TTagView,
  CREATE_ITEM: 'create-item' as TTagView,
  UPDATE_ITEM: 'update-item' as TTagView,
}

export const COMMUNITY_VIEW = {
  SEARCHING: 'searching' as TCommunityView,
  SEARCH_ERROR: 'search-error' as TCommunityView,
  RESULT: 'result' as TCommunityView,
  DEFAULT: 'default' as TCommunityView,
}

export const COMMUNITY_STYLE = {
  NORMAL: 'normal' as TCommunitySetterStyle,
  LANG: 'lang' as TCommunitySetterStyle,
  FRAMEWORK: 'framework' as TCommunitySetterStyle,
  DATABASE: 'database' as TCommunitySetterStyle,
  DEVOPS: 'devOps' as TCommunitySetterStyle,
  DESIGN: 'design' as TCommunitySetterStyle,
}

export const COMMON_COMMUNITIES = {
  LANG: [
    {
      title: 'JavaScript',
      logo: `${ICON_BASE}/pl/javascript.png`,
      raw: 'javascript',
    },
    {
      title: 'TypeScript',
      logo: `${ICON_BASE}/pl/typescript.png`,
      raw: 'typescript',
    },
    {
      title: 'Java',
      logo: `${ICON_BASE}/pl/java.png`,
      raw: 'java',
    },
    {
      title: 'PHP',
      logo: `${ICON_BASE}/pl/php.png`,
      raw: 'php',
    },
    {
      title: 'Go',
      logo: `${ICON_BASE}/pl/go.png`,
      raw: 'go',
    },
    {
      title: 'Python',
      logo: `${ICON_BASE}/pl/python.png`,
      raw: 'python',
    },
    {
      title: 'Ruby',
      logo: `${ICON_BASE}/pl/ruby.png`,
      raw: 'ruby',
    },
    {
      title: 'Swift',
      logo: `${ICON_BASE}/pl/swift.png`,
      raw: 'swift',
    },
    {
      title: 'Rust',
      logo: `${ICON_BASE}/pl/rust.png`,
      raw: 'rust',
    },
    {
      title: 'Elixir',
      logo: `${ICON_BASE}/pl/elixir.png`,
      raw: 'elixir',
    },
  ],
  FRAMEWORK: [
    {
      title: 'React',
      logo: `${ICON_BASE}/framework/react.png`,
      raw: 'react',
    },
    {
      title: 'Vue',
      logo: `${ICON_BASE}/framework/vue.png`,
      raw: 'vue',
    },
    {
      title: 'Electron',
      logo: `${ICON_BASE}/framework/electron.png`,
      raw: 'electron',
    },
    {
      title: 'Django',
      logo: `${ICON_BASE}/framework/django.png`,
      raw: 'django',
    },
    {
      title: 'Rails',
      logo: `${ICON_BASE}/framework/rails.png`,
      raw: 'rails',
    },
    {
      title: 'Laravel',
      logo: `${ICON_BASE}/framework/laravel.png`,
      raw: 'laravel',
    },
  ],
  DATABASE: [
    {
      title: 'MySQL',
      logo: `${ICON_BASE}/database/mysql.png`,
      raw: 'mysql',
    },
    {
      title: 'PostgreSQL',
      logo: `${ICON_BASE}/database/postgresql.png`,
      raw: 'postgresql',
    },
    {
      title: 'Redis',
      logo: `${ICON_BASE}/database/redis.png`,
      raw: 'redis',
    },
    {
      title: 'MongoDB',
      logo: `${ICON_BASE}/database/mongodb.png`,
      raw: 'mongodb',
    },
    {
      title: 'SQL-Server',
      logo: `${ICON_BASE}/database/sql-server.png`,
      raw: 'sql-server',
    },
  ],
}
