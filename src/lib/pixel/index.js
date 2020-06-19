// @flow
import ReactPixel from 'react-facebook-pixel'

const advancedMatching = {} // optional, more info: https://developers.facebook.com/docs/facebook-pixel/pixel-with-ads/conversion-tracking#advanced_match
const options = {
    autoConfig: true, // set pixel's autoConfig
    debug: true, // enable logs
}

export function facebookPixelInit() {
    if (process.env.IS_PRODUCTION) {
        ReactPixel.init(
            process.env.FACEBOOK_PIXEL_ID,
            advancedMatching,
            options
        )
    }
}

export function facebookPixelPageView() {
    if (process.env.IS_PRODUCTION) {
        ReactPixel.pageView()
    }
}

export function facebookPixelTrack(event: string, data: *) {
    if (process.env.IS_PRODUCTION) {
        ReactPixel.track(event, data)
    }
}

export function facebookPixelTrackCustom(event: string, data: *) {
    if (process.env.IS_PRODUCTION) {
        ReactPixel.trackCustom(event, data)
    }
}
