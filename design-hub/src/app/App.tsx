import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import './App.css';
// import Landing from './../pages/Landing.tsx';

export const  App = () => {
  return (
    <div className="App">
        <BrowserRouter>
            <main>
                <Switch>
                    <Route path="/about">
                        {/* <Landing /> */}
                    </Route>
                    <Route path="/:user_id">
                        {/* <Users /> */}
                    </Route>
                    <Route path="/">
                        {/* <Home /> */}
                    </Route>
                </Switch>
            </main>
        </BrowserRouter>
    </div>
  );
}

export default App;
