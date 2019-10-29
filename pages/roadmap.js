import React from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import Header from '../components/Header';
import Head from 'next/head';
import ReleaseCard from '../components/ReleaseCard';
import Category from '../components/Category';

const  Roadmap = () => {

    

    return(
            <Container> 
                <Head>
                    <title>Roadmap</title>
                    <link rel='icon' href='/favicon.ico' />
                </Head>
                <Header />
                <ReleaseCard version="1.1" release="2019 Q4" >
                    {/* Here be printed out loop(array) */}
                    <Category categoryTitle="Security" amountStatus="2 in development" entryAmount="Entries: 2" >

                    </Category>
                </ReleaseCard>

                <ReleaseCard version="1.2" release="2020 Q1" />
            </Container>
    );
}

export default Roadmap;