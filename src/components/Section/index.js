// @flow
import React, { type Node } from 'react'
import { Box, Container, Typography } from '@material-ui/core'
import { GREY_10 } from '../../consts/colors'
import { DEFAULT_SPACING } from '../../consts'
import Divider from '../Divider'

const DEFAULT_SPACING_SECTION = DEFAULT_SPACING * 8

const Section = ({ title, children }: { title: string, children: Node }) => {
    return (
        <Box style={{ marginTop: DEFAULT_SPACING_SECTION }}>
            <Container maxWidth="md" name={title.toLowerCase().split(' ')[0]}>
                <Box
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Typography
                        style={{
                            color: GREY_10,
                            fontFamily: 'Lato',
                            textTransform: 'uppercase',
                            fontWeight: 400,
                            fontSize: 46,
                            letterSpacing: 2.75,
                        }}
                    >
                        {title}
                    </Typography>
                    <Divider size={80} />
                </Box>
                <Box style={{ paddingTop: DEFAULT_SPACING_SECTION }}>
                    {children}
                </Box>
            </Container>
        </Box>
    )
}

export default Section
