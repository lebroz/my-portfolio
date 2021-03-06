// @flow
import React from 'react'
import { Box } from '@material-ui/core'
import Link from 'next/link'
import {
    DEFAULT_SPACING,
    SECTION_TITLE_ABOUT,
    SECTION_TITLE_EDUCATION,
    SECTION_TITLE_HOME,
    SECTION_TITLE_WORKS,
    SECTION_TITLE_SKILLS,
    SECTION_TITLE_LANGUAGES,
    SECTION_TITLE_HOBBIES,
    SECTION_TITLE_CONTACT,
} from '../../consts'

const ButtonHeader = ({ title }: { title: string }) => {
    return (
        <Box
            style={{
                marginTop: DEFAULT_SPACING,
                padding: DEFAULT_SPACING * 2,
            }}
        >
            <Link href={`#${title.toLowerCase().split(' ')[0]}`}>
                <a
                    style={{
                        textDecoration: 'none',
                        color: 'white',
                        fontWeight: 400,
                        letterSpacing: 2.25,
                        fontFamily: 'Nunito',
                        textTransform: 'uppercase',
                        fontSize: 15,
                    }}
                >
                    {title}
                </a>
            </Link>
        </Box>
    )
}

const Header = () => {
    return (
        <Box
            style={{
                position: 'absolute',
                display: 'flex',
                flexDirection: 'row',
                top: 0,
            }}
        >
            <ButtonHeader title={SECTION_TITLE_ABOUT} />
            <ButtonHeader title={SECTION_TITLE_SKILLS} />
            <ButtonHeader title={SECTION_TITLE_WORKS} />
            <ButtonHeader title={SECTION_TITLE_EDUCATION} />
            <ButtonHeader title={SECTION_TITLE_LANGUAGES} />
            <ButtonHeader title={SECTION_TITLE_HOBBIES} />
            <ButtonHeader title={SECTION_TITLE_CONTACT} />
        </Box>
    )
}

export default Header
