import React from 'react';
import styled from 'styled-components';

const StyledEntry = styled.div`
background-color: #bbbebe;

display:flex;
justfiy-content: center;
align-items: center;

color:black;
margin:16px;

.entry-container{
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
}
`

const Entry = ({ entryHeader, image, tasksCompleted, status, entrySummary }) => {

    return(
        <StyledEntry>
            <div className="entry-container">
                <h3>{entryHeader}</h3>
                <img src={image}></img>
                <div>
                    {tasksCompleted}
                </div>
                <div>
                    status: {status}
                </div>
                <div>{entrySummary}</div>
            </div>
        </StyledEntry>
    )
}

export default Entry;