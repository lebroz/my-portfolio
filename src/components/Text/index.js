// @flow
import React, { type Node } from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useTextStyles = makeStyles(() => ({
    root: props => ({
        color: props.color || 'white',
        fontFamily: props.fontFamily || 'Lato',
        textTransform: props.textTransform || 'uppercase',
        fontWeight: props.fontWeight || 400,
        fontSize: props.fontSize || 81,
        letterSpacing: props.letterSpacing || 2.75,
        textAlign: props.textAlign || null,
    }),
}))

const Text = ({ children, ...props }: { children: Node }) => {
    const classes = useTextStyles(props)

    return <Typography classes={classes}>{children}</Typography>
}

export default Text
