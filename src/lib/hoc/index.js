import React from 'react'
import { facebookPixelInit, facebookPixelPageView } from '../pixel'

export function withFacebookPixel(WrappedComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props)
        }

        componentDidMount() {
            facebookPixelInit()
            facebookPixelPageView()
        }

        render() {
            return <WrappedComponent />
        }
    }
}
