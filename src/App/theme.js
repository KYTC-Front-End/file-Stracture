import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';


const theme = createTheme({

    palette: {

        primary : {
            main : green[50],
            dark : '#000',
            font : '#fff'
        }, 
        secondary:{
            main : purple[50],
        }
    }, 





});



export default theme ; 
