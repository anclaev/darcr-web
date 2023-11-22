import { Global, css } from '@emotion/react'
import emotionNormalize from 'emotion-normalize'

import VARS from './vars'

export const GlobalStyles = () => (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500&display=swap');

      ${emotionNormalize}

      html {
        background-color: ${VARS.BACKGROUND_COLOR};
        color: #fff;
        font-family: 'Montserrat', sans-serif;
      }

      body {
        height: 100vh;
      }

      #root {
        position: relative;
        min-height: 100%;
      }
    `}
  />
)
