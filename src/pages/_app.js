import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../../src/theme'
import Router from 'next/router'
import withFBQ from 'next-fbq'

class MyApp extends App {
    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side')
        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles)
        }
    }

    render() {
        const { Component, pageProps } = this.props

        return (
            <React.Fragment>
                <Head>
                    <title>My page</title>
                </Head>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>
            </React.Fragment>
        )
    }
}

export default MyApp
// export default withFBQ('883039698874388', Router)(MyApp)
