import React from 'react';
import './App.css';
import {Grid} from '@material-ui/core'

import Header from './components/Header'
import SideBar from './components/SideBar'
import BodyContent from './components/BodyContent'

function App() {
  return (
    <div className="App">
      <Header />
      <Grid container>
      <BodyContent />
      <SideBar />
      </Grid>
      
    </div>
  );
}

export default App;
