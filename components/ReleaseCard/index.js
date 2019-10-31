import React, { useState } from 'react';
import styled from 'styled-components';


const StyledReleaseCard = styled.div`
width: 30%;
background-color: #006298;

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

margin:16px;
padding:16px;

.release-header{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    //border-bottom: 5px solid #f2a900;
    width:100%;

}

.version-heading{
    margin:8px;
    color:white;
}
.release-heading{
    margin-top:0px;
    margin-bottom:8px;
    color:white;
}


`

const ReleaseCard = ({ version, release, children }) =>{

    const [toggle, setToggle] = useState(false);

    return(
        <StyledReleaseCard>
            <div onClick={()=>{setToggle(true)}} className="release-header">
                <h2 className="version-heading">{version}</h2>
                <h3 className="release-heading" >{release}</h3>
            </div>
            {toggle===true &&
                <>
                {children}
                </>
            }
        </StyledReleaseCard>
    )
}

export default ReleaseCard;