import React, { useState, useEffect } from 'react';
//import styled from 'styled-components';
import Container from '../components/Container';
import Header from '../components/Header';
import Head from 'next/head';
import ReleaseCard from '../components/ReleaseCard';
import Category from '../components/Category';
import Entry from '../components/Entry';
import GlobalStyle from '../styles/GlobalStyle';

const Roadmap = () => {

    const [hasErrors, setHasErrors]= useState(false);
    const [jiraData, setJiraData] = useState({});

    async function fetchData() {
        const res = await fetch("JIRA STUFF");
        res
        .json()
        .then(res => setJiraData(res))
        .catch(err => setHasErrors(err));
    };

    useEffect(()=>{
        fetchData();
    }, []);

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
                background-color: #E5E5E5;
                margin: 0;
                padding: 0;
                font-family: 'Varela Round', sans-serif;
            }

            //Pallette
            //https://coolors.co/000000-29354e-fca311-e5e5e5-ffffff
            `
        }</style>
    </>
        
    );
};

export default Roadmap;