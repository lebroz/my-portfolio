// @flow
import React, { useLayoutEffect, useState } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import { Box } from '@material-ui/core'
import Divider from '../components/Divider'
import Header from '../components/Header'
import { BLUE_GREY_10_DARK } from '../consts/colors'
import Section from '../components/Section'
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
import Text from '../components/Text'
import withFBQ from 'next-fbq'
import { Router } from 'next/router'

function Page() {
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
                    <Text>Romain Lancia</Text>
                    <Text fontFamily="Economica" fontSize={32}>
                        Software Engineer
                    </Text>
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
                        <Text
                            color="black"
                            textAlign="center"
                            fontFamily="Roboto Condensed"
                            fontSize={21}
                            letterSpacing={1.75}
                        >
                            I am an enthusiastic Software Engineer. I like
                            creating new user-friendly web and mobile
                            applications. I am also very interested learning new
                            things and get better and better each day.
                        </Text>
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
                    <Text
                        color="black"
                        textAlign="center"
                        fontFamily="Roboto Condensed"
                        fontSize={14}
                        letterSpacing={1.75}
                    >
                        Chess, self-development, start-up, technologies,
                        reading, programming, piano
                    </Text>
                </Section>
                <Section title={SECTION_TITLE_CONTACT} mb={8}>
                    <List data={CONTACT_INFORMATIONS} />
                </Section>
                <FloatingButton
                    goto={SECTION_TITLE_HOME}
                    isVisible={posScrollbar > 200}
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

export default withFBQ('883039698874388', Router)(Page)
