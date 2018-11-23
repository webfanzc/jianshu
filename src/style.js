import { createGlobalStyle } from 'styled-components'
import reset from './assets/css/reset.css'
import element from 'element-theme-default'
createGlobalStyle`
${reset}
${element}
`
