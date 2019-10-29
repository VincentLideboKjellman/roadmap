import React from 'react';
import styled from 'styled-components';

const StyledCategory = styled.div`

width:100%;
margin:16px;
background-color:red;

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

const Category = ({ categoryTitle, amountStatus, taskAmount }) => {

    return(
        <StyledCategory>
            <div className="category-header">
                {categoryTitle}
            </div>
            <div className="category-header-info">
                <div>
                    {taskAmount}
                </div>
                <div>
                    {amountStatus}
                </div>
            </div>
        </StyledCategory>
    );
}
export default Category;