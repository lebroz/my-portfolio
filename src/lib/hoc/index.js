import React, { useLayoutEffect } from 'react'
import { facebookPixelInit, facebookPixelPageView } from '../pixel'

export function withFacebookPixel(WrappedComponent) {
    const EnhancedComponent = () => {
        useLayoutEffect(() => {
            facebookPixelInit()
            facebookPixelPageView()
        })

        return <WrappedComponent />
    }

    return <EnhancedComponent />
}
