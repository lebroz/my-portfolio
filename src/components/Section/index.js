// @flow
import React, { type Node } from 'react'
import { Box, Container } from '@material-ui/core'
import { GREY_10 } from '../../consts/colors'
import { DEFAULT_SPACING } from '../../consts'
import Divider from '../Divider'
import Text from '../Text'

const DEFAULT_SPACING_SECTION = DEFAULT_SPACING * 8

const Section = ({
    title,
    children,
    ...props
}: {
    title: string,
    children: Node,
}) => {
    return (
        <Box mt={8} {...props}>
            <Container
                maxWidth="md"
                name={title.toLowerCase().split(' ')[0]}
                id={title.toLowerCase().split(' ')[0]}
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Text fontSize={46} color={GREY_10}>
                        {title}
                    </Text>
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
