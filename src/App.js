import { BrowserRouter, Link ,Switch, Route}from "react-router-dom";
import {Main} from './main'
import {Edit} from './edit'
import React from "react";
function App() {
  return (
    <>
    <h1>aaa</h1>
    <BrowserRouter>
    <Link to="/">戻る</Link>
    <Link to="/edit">編集</Link>
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route  path="/edit">
        <Edit/>
      </Route>
    </Switch>
  </BrowserRouter>
    </>
  )

}

export default App;
