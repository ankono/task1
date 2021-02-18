import React, {Suspense} from 'react';
import {Switch, Route} from 'react-router-dom';
import {ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import StoryBook from './components/StoryBook';
import theme from './common/theme';
import SignUp from './components/SignUp';

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Switch>
          <Route path="/story-book" exact>
            <StoryBook/>
          </Route>
          <Route path="/sign-up" exact>
            <SignUp/>
          </Route>
        </Switch>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
