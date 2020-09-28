import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }


    html, body ,#root, .app{
        height: 100%;
    }

    body{
        background-color: #FCFCFC;
        font: 14px normal Roboto, sans-serif;
        color: black;
    }
`