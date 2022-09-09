/*
   this page is for /explore
 */
import { Provider } from 'mobx-react'
import { METRIC } from '@/constant'

import { exploreSEO } from '@/utils'

import { useStore } from '@/stores/init'

import GlobalLayout from '@/containers/layout/GlobalLayout'
import ExploreContent from '@/containers/content/ExploreContent'

export const getServerSideProps = async (context) => {
  return {
    redirect: {
      permanent: false,
      destination: '/home',
    },
  }
}

const ExplorePage = (props) => {
  const store = useStore(props)
  const seoConfig = exploreSEO()

  return (
    <Provider store={store}>
      <GlobalLayout metric={METRIC.EXPLORE} seoConfig={seoConfig} noSidebar>
        <ExploreContent />
      </GlobalLayout>
    </Provider>
  )
}

export default ExplorePage
