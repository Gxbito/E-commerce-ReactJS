import {createGlobalStyle} from "styled-components";

export const GlobalStyles=createGlobalStyle`
 :root {
    --main-color: #FF7347;
    --background-color: #ffffff;
    --light-gray: #eeeeee;
    --black: #464646;
    --gray: #848484;
    --black:#000000;
    --desktop-padding: 0px 150px;
    --mobile-padding: 0px 20px;
 }

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    padding: var(--desktop-padding);
    font-family: "Poppins";
    background-color: var(--background-color);
}

`