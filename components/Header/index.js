import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`

//#112F47 dark blue
.header{
    height: 5vw;
    width:100%;
    background-color: #006298;
    color: white;
    display:flex;
    //justify-content: center;
    align-items: center;
}

img{
    width:100%;
}

.header > button{
    padding-top:5px;
    color:white;
    //font-weight:bold;
    height: 100%;
    border: none;
    background-color: #006298;
    border-bottom: 5px solid #006298;
    
    padding-right: 16px;
    padding-left: 16px;
}
.header > button:hover{
    height: 100%;
    border: none;
    background-color: #112F47;
    border-bottom: 5px solid #bbbebe;
    transition: .15s ease-out;
}

.header > .selected-button{
    height: 100%;
    border: none;
    background-color: #112F47;
    border-bottom: 5px solid #f2a900;

    padding-right: 16px;
    padding-left: 16px;
}
.header > .selected-button:hover{
    border-bottom: 5px solid #f2a900;
}

.add-button{
    font-size: 1.7em;
}
.header > .header-item-add{
    background-color: #71b2c9;
    border-bottom: 5px solid #71b2c9;
}


`

const Header = ({ logo }) => {

    return(
        <StyledHeader>
            <img src="./banner.png" alt="logo"/>
            <div className="header">
                <button className="selected-button" type="button">VGR-INTEGRATION</button>
                <button className="header-item" type="button">VGR-DRIFT</button>
                <button className="header-item" type="button">VGR-UNDERHÅLLNING</button>
                <button className="header-item-add" type="button"><span className="add-button">+</span></button>
            </div>
        </StyledHeader>
    )
}

export default Header;