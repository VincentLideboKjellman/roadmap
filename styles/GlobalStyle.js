import { createGlobalStyle } from 'styled-components';
import { modernNormalize } from 'styled-modern-normalize';

const GlobalStyle = createGlobalStyle`
    ${modernNormalize}
    // :root{

    //     /* Style Variables */
    //     --bg-color: #E0E0E0;

    // }

    * {
        box-sizing: border-box;
      }

      html,
      body,
      #__next {
        height: 100%;
        width: 100%;
      }

      body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
          "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      .Layout {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
      }

      .Content {
        flex: 1;
        display: flex;
        flex-direction: column;
        font-family: Arial;
      }
`;

export default GlobalStyle;