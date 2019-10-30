import React from 'react';
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

    return(
        <StyledCategory>
            <div className="category-header">
                {categoryTitle}
            </div>
            <div className="category-header-info">
                <div>
                    {entryAmount}
                </div>
                <div>
                    {amountStatus}
                </div>
            </div>
            <div>
                {children}
            </div>
        </StyledCategory>
    );
}
export default Category;