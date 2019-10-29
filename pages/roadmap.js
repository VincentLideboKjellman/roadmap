import React from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import Header from '../components/Header';
import Head from 'next/head';
import ReleaseCard from '../components/ReleaseCard';

const  Roadmap = () => {

    

    return(
            <Container> 
                <Head>
                    <title>Roadmap</title>
                    <link rel='icon' href='/favicon.ico' />
                </Head>
                <Header />
                <ReleaseCard version="1.1" categoryTitle="Security" amountStatus="2 in development" taskAmount="Tasks: 2" release="2019 Q4" />
                <ReleaseCard version="1.2" categoryTitle="Security" amountStatus="3 in development" taskAmount="Tasks: 3" release="2019 Q4" />
            </Container>
    );
}

export default Roadmap;