import React from 'react';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import Home from './components/Home';
import Recent from './components/Recent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Grid } from '@mui/material';
import Popular from './components/Popular';
import Resolved from './components/Resolved';
import { ScreenProvider } from './ScreenContext';

function App() {
  return (
    <ScreenProvider>
      <Router>
        <div className="bg-[#0e1113] h-screen w-screen">
          <Grid container>
            <Grid item xs={12}>
              <TopBar />
            </Grid>
            <Grid item sm={2}>
              <SideBar />
            </Grid>
            <Grid item sm={7}>
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/popular" element={<Popular />} />
                <Route path="/resolved" element={<Resolved />} />
              </Routes>
            </Grid>
            <Grid item sm={3}>
              <Recent />
            </Grid>
          </Grid>
        </div>
      </Router>
    </ScreenProvider>
  );
}

export default App;
