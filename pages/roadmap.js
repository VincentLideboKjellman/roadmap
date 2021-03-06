import React, { useState, useEffect } from 'react';
//import styled from 'styled-components';
import Container from '../components/Container';
import Header from '../components/Header';
import Head from 'next/head';
import ReleaseCard from '../components/ReleaseCard';
import Category from '../components/Category';
import Entry from '../components/Entry';
import GlobalStyle from '../styles/GlobalStyle';
import base64 from 'base-64';


const Roadmap = () => {

    const [hasErrors, setHasErrors]= useState(false);
    const [jiraData, setJiraData] = useState({});
    //ebbaBYC2er515AQoSAwwF1BF


    async function fetchData() {
        //let headers = {"Content-Type": "application/json"};
        // const response = await fetch("https://vgregionit.atlassian.net/rest/agile/latest/board/91/sprint");
        // response.json()
        // .then(response => setJiraData(response))
        // .catch(err => setHasErrors(err));
     
        fetch('https://vgregionit.atlassian.net/rest/agile/1.0/board/91/sprint', {
            mode: 'cors',
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Basic dmluY2VudC5saWRlYm8ua2plbGxtYW5AZ21haWwuY29tOmViYmFCWUMyZXI1MTVBUW9TQXd3RjFCRg==",
                "User-Agent": "PostmanRuntime/7.11.0",
                "Cache-Control": "no-cache",
                "Host": "vgregionit.atlassian.net",
                "cookie": "atlassian.xsrf.token=BZL1-0CCM-D4SP-1O07_a1fd64ac6b8bbf2164c72826f3310421bfd5f96d_lin",
                "accept-encoding": "gzip, deflate",
                "Connection": "keep-alive",
                "cache-control": "no-cache"
              },
          })
          .then(response => response.json())
          .then(console.log);
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

                {/* mapping jira data into components */}

                {/* {jiraData.map(releaseCard => (
                    <ReleaseCard>
                        {jiraData.map(category =>(
                            <Category>
                                {jiraData.map(entry => (
                                    <Entry></Entry>
                                ))}
                            </Category>
                        ))};                
                    </ReleaseCard>
                ))}; */}

                {/* End, below is an example */}

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