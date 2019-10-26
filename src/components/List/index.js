// @flow
import React from 'react'
import {ListWorksHeader} from './ListWorks'
import {GREY_10_LIGHT} from '../../consts/colors'
import {DEFAULT_SPACING} from '../../consts'

const List = ({data}: { data: Object }) => {
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
                            leftTitle={item.key}
                            rightTitle={item.value}
                            index={index}
                            leftStyle={{
                                fontWeight: 700,
                                fontSize: 18,
                            }}
                            rightStyle={{
                                fontFamily: 'Economica',
                                fontWeight: 400,
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
export default List;