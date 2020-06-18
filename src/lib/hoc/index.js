import React from 'react'
import { facebookPixelInit, facebookPixelPageView } from '../pixel'

export function withFacebookPixel(WrappedComponent) {
    return class EnhancedComponent extends React.Component {
        constructor(props) {
            super(props)
        }

        componentDidMount() {
            facebookPixelInit()
            facebookPixelPageView()
        }

        render() {
            return <WrappedComponent {...this.props} />
        }
    }
}
