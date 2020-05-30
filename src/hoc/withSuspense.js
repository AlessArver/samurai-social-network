import React, { Suspense } from 'react'
import Preloader from '../components/common/Preloader/Preloder'

export const withSuspense = Component => props => (
  <Suspense fallback={<Preloader/>}>
    <Component {...props}/>
  </Suspense>
)