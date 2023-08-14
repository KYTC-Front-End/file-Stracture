import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import {Layout, Landing} from '../Pages';
import Card from '../Components/Cards'
import theme from './theme';


function App() {
  return (
  <ThemeProvider theme = {theme}>
         <Layout className="App">
      <Card house={{location : "gaza", title : "roof" , description: "vhjn"}} />
    <Landing/>
    </Layout>

  </ThemeProvider>
 

  );
}

export default App;
