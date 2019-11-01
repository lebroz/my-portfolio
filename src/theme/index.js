import { createMuiTheme } from '@material-ui/core/styles'
import {
    BLUE_GREY_10_DARK,
    BLUE_GREY_10_LIGHT,
    BLUE_GREY_9_DARK,
    BLUE_GREY_9_LIGHT,
} from '../consts/colors'
import { red } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: BLUE_GREY_9_LIGHT,
        },
        secondary: {
            main: BLUE_GREY_9_DARK,
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },
})

export default theme
