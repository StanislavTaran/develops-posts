import { createGlobalStyle } from 'styled-components'
import {DefaultTheme} from 'styled-components'

export const theme : DefaultTheme  = {
  colors: {
    firstMain: '#1b214c',
    secondMain: '#ab116f',
    secondary : '#b5b4b4'
  },
  textColors :{
    main : '#fff',
    secondary: '#727272'
  }
}

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0 5px;
    box-sizing: border-box;
    background-color : #f1f1f1;
  }
`


