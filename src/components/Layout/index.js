// @flow
import React, { type Node } from 'react'
import { Box } from '@material-ui/core'
import { SECTION_TITLE_HOME } from '../../consts'
import CssBaseline from '@material-ui/core/CssBaseline'

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
