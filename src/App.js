import React from 'react';
import './App.css';
import {Grid} from '@material-ui/core'

import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'
import BodyContent from './components/BodyContent/BodyContent'

function App() {
  return (
    <div className="App">
      <Header />
      <Grid container>
      <BodyContent />
      
      </Grid>
      
    </div>
  );
}

export default App;
