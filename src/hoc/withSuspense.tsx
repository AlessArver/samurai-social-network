import React, { ComponentType, Suspense } from 'react'
import Preloader from '../components/common/Preloader/Preloder'

export const withSuspense = <WCP, >(Component: ComponentType<WCP>) => (props: WCP) => (
  <Suspense fallback={<Preloader/>}>
    <Component {...props}/>
  </Suspense>
)