// @flow
import ReactPixel from 'react-facebook-pixel'

const advancedMatching = {} // optional, more info: https://developers.facebook.com/docs/facebook-pixel/pixel-with-ads/conversion-tracking#advanced_match
const options = {
    autoConfig: true, // set pixel's autoConfig
    debug: false, // enable logs
}

export function facebookPixelInit() {
    ReactPixel.init(process.env.FACEBOOK_PIXEL_ID, advancedMatching, options)
}

export function facebookPixelPageView() {
    ReactPixel.pageView()
}

export function facebookPixelTrack(event: string, data: *) {
    ReactPixel.track(event, data)
}

export function facebookPixelTrackCustom(event: string, data: *) {
    ReactPixel.trackCustom(event, data)
}
