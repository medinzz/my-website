import React, { Suspense } from 'react'
import  Lottie from 'lottie-react'
import Loading from './Loading'

const GreetingLottie = (props: any) => {

  return (
    <Suspense fallback={<Loading />}>
      {/* To override default onClick pause by Lottie */}
      <div onClick={() => null}>
        <Lottie 
          animationData={props.animationData}
        />
      </div>
    </Suspense>
  )
}
 
export default GreetingLottie
