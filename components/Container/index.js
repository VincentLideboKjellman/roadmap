import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`

display: inline-block;
padding: 0px;
margin: 0px;

` 

const Container = ({ children, className, padding, width }) => {
    return(
        <StyledContainer className={className} padding={padding} width={width} >
            {children}
        </StyledContainer>
    )
}

export default Container;