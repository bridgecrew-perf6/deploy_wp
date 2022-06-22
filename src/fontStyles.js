import { createGlobalStyle } from "styled-components";

import Acme from './fonts/Acme/Acme-Regular.ttf';
// import Fredoka from './fonts/Fredoka/Fredoka-VariableFont_wdth,wght.ttf';

const FontStyles = createGlobalStyle`

    @font-face {
    font-family: 'Acme';
    src: url(${Acme}) format('truetype');
    }
`;

export default FontStyles;