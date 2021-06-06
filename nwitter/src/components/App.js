import React, { useState } from "react";
import AppRouter from "components/Router";
import {authService} from "myBase";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);  // useState에 로그인 여부를 줌
  return (
    <React.Fragment>
      <AppRouter isLoggedIn = {isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </React.Fragment>
  );
}

export default App;
