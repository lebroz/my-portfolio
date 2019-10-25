// @flow
import React from 'react'
import { Typography } from '@material-ui/core'
import { DEFAULT_SPACING } from '../../consts'

const ListSkills = ({ data }: { data: Object }) => {
    return (
        <>
            {data.map((item, index) => {
                return (
                    <div key={index}>
                        <Typography
                            style={{
                                marginTop:
                                    index === 0 ? 0 : DEFAULT_SPACING * 2,
                                fontFamily: 'Roboto Condensed',
                                fontWeight: 700,
                                fontSize: 18,
                                textAlign: 'center',
                                textDecoration: 'italic',
                            }}
                        >
                            {item.title}
                        </Typography>
                        <Typography
                            style={{
                                fontFamily: 'Roboto Condensed',
                                fontWeight: 400,
                                fontSize: 16,
                                textAlign: 'center',
                                letterSpacing: 1.75,
                            }}
                        >
                            {item.skills}
                        </Typography>
                    </div>
                )
            })}
        </>
    )
}

export default ListSkills
