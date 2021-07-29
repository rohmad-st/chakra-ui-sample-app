import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';

import Articles from './pages/Articles';
import About from './pages/About';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Articles} exact />
          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
