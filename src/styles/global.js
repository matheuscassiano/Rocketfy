import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,500;1,700&display=swap');
    
    * {
        margin: 0;
        padding: 0;
        outline:0
        box-sizing: border-box;
    }

    html, body, #root {
        heigth: 100%;
    }

    body {
        font: 14px 'Roboto', sans-serif;
        background: #ecf1f8;
        -webkit-font-smoothing: antialiased !important;
    }

    ul {
        list-style: none;
    }

`;