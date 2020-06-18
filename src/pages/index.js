// @flow
import React, { useLayoutEffect, useState } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import { Box, Typography } from '@material-ui/core'
import Divider from '../components/Divider'
import Header from '../components/Header'
import { BLUE_GREY_10_DARK } from '../consts/colors'
import Section from '../components/Section'
import { ABOUT_ME } from '../consts/strings'
import {
    SECTION_TITLE_ABOUT,
    SECTION_TITLE_EDUCATION,
    SECTION_TITLE_WORKS,
    SECTION_TITLE_SKILLS,
    ALL_SKILLS,
    ALL_TASKS_WORKS,
    SECTION_TITLE_HOME,
    ALL_EDUCATION,
    SECTION_TITLE_HOBBIES,
    SECTION_TITLE_CONTACT,
    SECTION_TITLE_LANGUAGES,
    ALL_LANGUAGES,
    CONTACT_INFORMATIONS,
} from '../consts'
import ListWorks from '../components/List/ListWorks'
import FloatingButton from '../components/FloatingButton'
import { ExpandMore, ArrowUpward } from '@material-ui/icons'
import ListEducation from '../components/List/ListEducation'
import List from '../components/List'
import withFacebookPixel from '../lib/hoc'

const App = () => {
    const [posScrollbar, setPosScrollbar] = useState(0)

    useLayoutEffect(() => {
        setPosScrollbar(window.scrollY)
        window.addEventListener('scroll', () => {
            setPosScrollbar(window.scrollY)
        })
    }, [posScrollbar, setPosScrollbar])

    return (
        <>
            <Head>
                <title>Romain Lancia</title>
            </Head>
            <Layout>
                <Box
                    style={{
                        display: 'flex',
                        height: '100vh',
                        flexDirection: 'column',
                        backgroundColor: BLUE_GREY_10_DARK,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Header />
                    <Typography
                        style={{
                            color: 'white',
                            fontFamily: 'Lato',
                            textTransform: 'uppercase',
                            fontWeight: 400,
                            fontSize: 81,
                            letterSpacing: 2.75,
                        }}
                    >
                        Romain Lancia
                    </Typography>
                    <Typography
                        style={{
                            color: 'white',
                            fontFamily: 'Economica',
                            textTransform: 'uppercase',
                            fontWeight: 400,
                            fontSize: 32,
                            letterSpacing: 2.75,
                        }}
                    >
                        Software Engineer
                    </Typography>
                    <Divider />
                    <FloatingButton
                        goto={SECTION_TITLE_ABOUT}
                        isVisible
                        style={{
                            bottom: 40,
                            alignSelf: 'center',
                        }}
                    >
                        <ExpandMore />
                    </FloatingButton>
                </Box>
                <Section title={SECTION_TITLE_ABOUT}>
                    <Box>
                        <Typography
                            style={{
                                textAlign: 'center',
                                fontFamily: 'Roboto Condensed',
                                fontWeight: 400,
                                fontSize: 21,
                                letterSpacing: 1.75,
                            }}
                        >
                            {ABOUT_ME}
                        </Typography>
                    </Box>
                </Section>
                <Section title={SECTION_TITLE_SKILLS}>
                    <List data={ALL_SKILLS} />
                </Section>
                <Section title={SECTION_TITLE_WORKS}>
                    <ListWorks data={ALL_TASKS_WORKS} />
                </Section>
                <Section title={SECTION_TITLE_EDUCATION}>
                    <ListEducation data={ALL_EDUCATION} />
                </Section>
                <Section title={SECTION_TITLE_LANGUAGES}>
                    <List data={ALL_LANGUAGES} />
                </Section>
                <Section title={SECTION_TITLE_HOBBIES}>
                    <div />
                </Section>
                <Section title={SECTION_TITLE_CONTACT}>
                    <List data={CONTACT_INFORMATIONS} />
                </Section>
                <FloatingButton
                    goto={SECTION_TITLE_HOME}
                    isVisible={posScrollbar > 200 ? true : false}
                    style={{
                        position: 'fixed',
                        bottom: 40,
                        right: 40,
                        backgroundColor: '#d50000',
                        color: 'white',
                    }}
                >
                    <ArrowUpward />
                </FloatingButton>
            </Layout>
        </>
    )
}

export default withFacebookPixel(App)
