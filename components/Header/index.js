import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`

//#112F47 dark blue
.header{
    height: 5vw;
    width:100%;
    background-color: #006298;
    color: #bbbebe;
    display:flex;
    justify-content: space-around;
    align-items: center;
}

.header > img{
    width:15%;
}

.header > button{
    padding-top:5px;
    color:white;
    //font-weight:bold;
    height: 100%;
    border: none;
    background-color: #006298;
    border-bottom: 5px solid #006298;
}
.header > button:hover{
    height: 100%;
    border: none;
    background-color: #112F47;
    border-bottom: 5px solid #bbbebe;
}


.header > .selected-button{
    height: 100%;
    border: none;
    background-color: #112F47;
    border-bottom: 5px solid #f2a900;
}
.header > .selected-button:hover{
    border-bottom: 5px solid #f2a900;
}



`

const Header = ({ logo }) => {

    return(
        <StyledHeader>
            <div className="header">
                <img src="./logo.svg" alt="logo"/>
                <button className="selected-button" type="button">VGR-INTEGRATION</button>
                <button type="button">VGR-DRIFT</button>
                <button type="button">+</button>
                <button type="button">+</button>
            </div>
        </StyledHeader>
    )
}

export default Header;