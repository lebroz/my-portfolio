// @flow
import React from 'react'
import { Typography } from '@material-ui/core'
import { DEFAULT_SPACING } from '../../consts'
import Box from '@material-ui/core/Box'
import { GREY_10_LIGHT, GREY_10 } from '../../consts/colors'

export const ListWorksHeader = ({
    leftTitle,
    leftStyle,
    rightTitle,
    rightStyle,
}: {
    leftTitle: string,
    leftStyle?: Object,
    rightTitle: string,
    rightStyle?: Object,
}) => {
    return (
        <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography
                style={{
                    fontFamily: 'Roboto Condensed',
                    fontWeight: 700,
                    fontSize: 18,
                    color: GREY_10,
                    ...leftStyle,
                }}
            >
                {leftTitle}
            </Typography>
            <Typography
                style={{
                    fontFamily: 'Roboto Condensed',
                    fontWeight: 700,
                    fontSize: 18,
                    color: GREY_10,
                    ...rightStyle,
                }}
            >
                {rightTitle}
            </Typography>
        </Box>
    )
}

export const ListWorksMainTasks = ({
    data,
    end,
}: {
    data: Array<string>,
    end: boolean,
}) => {
    return (
        <ul
            style={{
                padding: 0,
                marginBottom: end === true ? 0 : DEFAULT_SPACING * 4,
                marginLeft: DEFAULT_SPACING * 2,
                paddingTop: DEFAULT_SPACING * 2,
                paddingBottom: DEFAULT_SPACING * 2,
            }}
        >
            {data.map((item, index) => {
                return (
                    <li key={index}>
                        <Typography
                            style={{
                                fontFamily: 'Roboto Condensed',
                                fontWeight: 400,
                                fontSize: 16,
                            }}
                        >
                            {item}
                        </Typography>
                    </li>
                )
            })}
        </ul>
    )
}

const ListWorks = ({ data }: { data: Object }) => {
    return (
        <>
            {data.map((item, index) => {
                return (
                    <div key={index}>
                        <ListWorksHeader
                            leftTitle={item.jobTitle}
                            rightTitle={item.date}
                            index={index}
                        />
                        <ListWorksHeader
                            leftTitle={item.companyName}
                            rightTitle={item.location}
                            index={index}
                            leftStyle={{
                                fontFamily: 'Economica',
                                fontWeight: 700,
                                fontSize: 18,
                                color: GREY_10_LIGHT,
                            }}
                            rightStyle={{
                                fontFamily: 'Economica',
                                fontWeight: 700,
                                fontSize: 18,
                                color: GREY_10_LIGHT,
                            }}
                        />
                        <ListWorksMainTasks
                            data={item.tasks}
                            end={index === data.length - 1}
                        />
                    </div>
                )
            })}
        </>
    )
}

export default ListWorks
