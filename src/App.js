// App.js
import React from 'react';
import { Container, AppBar, Typography } from '@mui/material';
import TrademarkSearch from './components/TrademarkSearch';


function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Container>
          <Typography variant="h4" component="h1" style={{ padding: '15px 0' }}>
            Trademark Search
          </Typography>
        </Container>
      </AppBar>
      <Container style={{ marginTop: '30px' }}>
        <TrademarkSearch />
      </Container>
    </div>
  );
}

export default App;

