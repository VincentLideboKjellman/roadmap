import React from 'react';
import styled from 'styled-components';
import Category from '../Category';


const StyledReleaseCard = styled.div`
width: 30%;
//height: 200px;
background-color: gray;

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

margin:16px;

h1{
    margin:16px;
}

`

const ReleaseCard = ({ version, release, children }) =>{

    return(
        <StyledReleaseCard>
            <h1>{version}</h1>
            <p>{release}</p>
            {children}
        </StyledReleaseCard>
    )
}

export default ReleaseCard;