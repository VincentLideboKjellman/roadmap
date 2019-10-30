import React from 'react';
import styled from 'styled-components';

const StyledEntry = styled.div`
background-color: green;

display:flex;
justfiy-content: center;
align-items: center;

.entry-conteiner{
    display:flex;
    justify-content: center;
    align-itemns: center;
}
`

const Entry = ({ entryHeader, image, tasksCompleted, status, entrySummary }) => {

    return(
        <StyledEntry>
            <div className="entry-container">
                <h1>{entryHeader}</h1>
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