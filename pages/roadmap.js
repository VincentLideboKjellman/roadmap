import React from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import Header from '../components/Header';
import Head from 'next/head';

const  Roadmap = () => {

    return(
        <Container> 
            <Head>
                <title>Roadmap</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Header />
        </Container>
    );
}

export default Roadmap;