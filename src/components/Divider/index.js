// @flow
import React from 'react'

const Divider = ({ size }: { size?: number }) => {
    return (
        <div
            style={{
                height: 3,
                width: size,
                backgroundColor: 'red',
            }}
        />
    )
}

export default Divider
