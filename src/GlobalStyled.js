import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const color = {
  point: "#e50914",
};

export const spacing = {
  side: "80px",
  moside: "20px",
};

export const GlobalStyled = createGlobalStyle`
    ${reset}

    *{
        box-sizing: border-box;
    }

    body{
        background-color: #1d1d1d;
        color: white;
        font-family: "Noto Sans KR", sans-serif;
        word-break: keep-all;
        letter-spacing: -1px;
    }

    a{
        text-decoration: none;
        color: white;
    }

    img{
        width: 100%;
        display: block;
        
    }

    li{
        list-style: none;
    }

    

`;
