import { createGlobalStyle } from 'styled-components';
import { modernNormalize } from 'styled-modern-normalize';

const GlobalStyle = createGlobalStyle`
    ${modernNormalizde}
    :root{

        /* Style Variables */
        --bg-color: #E0E0E0;

    }
    
    body{
        background-color: var(--bg-color);
        display: block;
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyle;