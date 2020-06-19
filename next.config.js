const config = {
    development: {
        FACEBOOK_PIXEL_ID: '',
        IS_PRODUCTION: false,
    },
    production: {
        FACEBOOK_PIXEL_ID: '883039698874388',
        IS_PRODUCTION: true,
    },
}

const KEY_CONFIG = process.env.NODE_ENV

module.exports = {
    env: config[KEY_CONFIG],
}
