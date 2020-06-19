// @flow
import ReactPixel from 'react-facebook-pixel'
import { isEmpty } from 'voca'

const advancedMatching = {} // optional, more info: https://developers.facebook.com/docs/facebook-pixel/pixel-with-ads/conversion-tracking#advanced_match
const options = {
    autoConfig: true, // set pixel's autoConfig
    debug: false, // enable logs
}

export function facebookPixelInit() {
    console.log('eenv: ', process.env.FACEBOOK_PIXEL_ID)
    // if (!isEmpty(process.env.FACEBOOK_PIXEL_ID)) {
    ReactPixel.init('883039698874388', advancedMatching, options)
    // }
}

export function facebookPixelPageView() {
    // if (!isEmpty(process.env.FACEBOOK_PIXEL_ID)) {
    ReactPixel.pageView()
    // }
}

export function facebookPixelTrack(event: string, data: *) {
    if (!isEmpty(process.env.FACEBOOK_PIXEL_ID)) {
        ReactPixel.track(event, data)
    }
}

export function facebookPixelTrackCustom(event: string, data: *) {
    if (!isEmpty(process.env.FACEBOOK_PIXEL_ID)) {
        ReactPixel.trackCustom(event, data)
    }
}
