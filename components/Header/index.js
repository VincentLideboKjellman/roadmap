import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`

// width:100%;

.header{
    width:100%;
    background-color: blue;
    color: red;
    display:flex;
    justify-content: space-around;
    align-items: center;
}

`

const Header = () => {

    return(
        <StyledHeader>
            <div className="header">
                <div>VGR-INTEGRATION</div>
                <div>Något annat</div>
                <div>Något annat2</div>
                <div>Något annat3</div>
                <div>Något annat4</div>
            </div>
        </StyledHeader>
    )
}

export default Header;