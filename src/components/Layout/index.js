// @flow
import React, { type Node } from 'react'
import { Box, CssBaseline } from '@material-ui/core'
import { SECTION_TITLE_HOME } from '../../consts'

const Layout = ({ children }: { children: Node }) => {
    return (
        <>
            <CssBaseline />
            <a id={SECTION_TITLE_HOME.toLowerCase()} />
            <Box
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                {children}
            </Box>
        </>
    )
}

export default Layout
