import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --dark-blue: #385898;
        --light-blue: #b3f8fa;
        --yellow: #FFFF00;
        --purple: #FF00FF;
    }
    
    body {
        background-color: var(--body-background);
    }

    nav {
        background-color: var(--nav-background);
    }

    button {
        background-color: var(--button-color);
        color: var(--button-text-color);
    }

    html[data-theme=light] {
        --body-background: var(--light-blue);
        --nav-background: var(--dark-blue);
        --button-color: #e7f3ff;
        --button-text-color: #385898;
    }
    
    html[data-theme=dark]{
        --body-background: cyan;
        --nav-background: black;
        --button-color: #0000FF;
        --button-text-color: #DFDFFF;
    }
`;

export default GlobalStyles;
