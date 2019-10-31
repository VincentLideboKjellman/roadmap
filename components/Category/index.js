import React, { useState }from 'react';
import styled from 'styled-components';

const StyledCategory = styled.div`

width:100%;
margin:0 16px 16px 16px;
background-color: #008755;
color:white;
border: 1px solid black;

.category-header{
    display:flex;
    width:100%;
    justify-content:center;
    align-items:center;
}

.category-header-info{
    width: 100%;
    display:flex;
    justify-content:space-around;
    align-items:center;
    flex-direction:row;
}

`

const Category = ({ categoryTitle, amountStatus, entryAmount, children }) => {

    const [toggleState, setToggleState] = useState(false);

    const toggleCard = () => {
        if(toggleState === false){
            setToggleState(true);
        } else if (toggleState === true){
            setToggleState(false);
        }
    } 

    return(
        <StyledCategory>
            <div  onClick={()=>{toggleCard();}} className="category-header">
                {categoryTitle}
            </div>
            <div onClick={()=>{toggleCard();}} className="category-header-info">
                <div>
                    {entryAmount}
                </div>
                <div>
                    {amountStatus}
                </div>
            </div>

            <div>
                {toggleState===true && 
                    <>
                    {children}
                    </>
                }
            </div>
        </StyledCategory>
    );
}
export default Category;