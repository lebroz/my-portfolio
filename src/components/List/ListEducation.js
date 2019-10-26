// @flow
import React from 'react'
import { ListWorksHeader } from './ListWorks'
import { GREY_10_LIGHT } from '../../consts/colors'
import { DEFAULT_SPACING } from '../../consts'

const ListEducation = ({ data }: { data: Object }) => {
    return (
        <>
            {data.map((item, index) => {
                return (
                    <div
                        key={index}
                        style={{
                            marginBottom:
                                index === data.length - 1
                                    ? 0
                                    : DEFAULT_SPACING * 4,
                        }}
                    >
                        <ListWorksHeader
                            leftTitle={item.title}
                            rightTitle={item.date}
                            index={index}
                        />
                        <ListWorksHeader
                            leftTitle={item.subtitle}
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
                    </div>
                )
            })}
        </>
    )
}

export default ListEducation
