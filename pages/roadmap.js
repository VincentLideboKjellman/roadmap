import React from 'react';
//import styled from 'styled-components';
import Container from '../components/Container';
import Header from '../components/Header';
import Head from 'next/head';
import ReleaseCard from '../components/ReleaseCard';
import Category from '../components/Category';
import Entry from '../components/Entry';
import GlobalStyle from '../styles/GlobalStyle';

const Roadmap = () => {

    return(
        <>
        <Container>
                <Head>
                    <title>Roadmap</title>
                    <link rel='icon' href='/favicon.ico' />
                </Head>
                <Header/>
                <ReleaseCard version="1.1" release="2019 Q4" >
                    {/* Here be printed out loop(array) */}
                    <Category categoryTitle="Security" amountStatus="2 in development" entryAmount="Entries: 2" >
                        <Entry
                            entryHeader="Add firewalls"
                            tasksCompleted="2/7 Tasks completed"
                            status="In Development"
                            entrySummary="Setting up and applying firewalls to all VGR-IT servers."
                        />
                        <Entry
                            entryHeader="Program Security measures"
                            tasksCompleted="5/10 Tasks completed"
                            status="In Development"
                            entrySummary="Setting up and applying firewalls to all VGR-IT servers."
                        />
                    </Category>
                    <Category categoryTitle="Servers" amountStatus="2 in development" entryAmount="Entries: 2" >
                    </Category>
                </ReleaseCard>

                <ReleaseCard version="1.2" release="2020 Q1" />
        </Container>
        <style jsx global>{`
            * {
                box-sizing: border-box;
            }

            html,
            body,
            #__next {
                height: 100%;
                width: 100%;
            }
            body {
                margin: 0;
                padding: 0;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
                "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
                "Helvetica Neue", sans-serif;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }
            `
        }</style>
    </>
        
    );
};

export default Roadmap;