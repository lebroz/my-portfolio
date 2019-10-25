// @flow
import React from 'react'
import { Fab } from '@material-ui/core'
import Link from 'next/link'

const FloatingButton = ({
    goto,
    isVisible,
    style,
    children,
}: {
    goto: string,
    isVisible: boolean,
    style?: Object,
    children: Object,
}) => {
    return (
        <div style={{ display: isVisible === false ? 'none' : 'block' }}>
            <Link href={`#${goto.toLowerCase().split(' ')[0]}`}>
                <a
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Fab
                        style={{
                            position: 'absolute',
                            backgroundColor: 'white',
                            ...style,
                        }}
                    >
                        {children}
                    </Fab>
                </a>
            </Link>
        </div>
    )
}

export default FloatingButton
