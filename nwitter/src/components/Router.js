import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = ({isLoggedIn}) => {
  return(
    <Router>
      <Switch>
        {isLoggedIn ? (
          <React.Fragment>  {/* Fragment는 그냥 <>로도 쓰이는데 어째서인지 오류나서 React.Fragment로 적어줌. */}
            <Route exact path="/">  {/* 로그인 된 상태면 Home으로 */}
              <Home />
            </Route>
          </React.Fragment>
        ) : (
          <Route exact path="/">  {/* 로그인 안 된 상태면 Auth으로 */}
            <Auth />
          </Route>
        )}
      </Switch>
    </Router>
  );
};


export default AppRouter;