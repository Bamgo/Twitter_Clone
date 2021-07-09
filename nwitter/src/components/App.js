import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import {authService} from "myBase";

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if(user){
        if(user.displayName == null){
          const ind = user.email.indexOf("@")
          const end = user.email.substring(0, ind)
          user.updateProfile({displayName:end})
        }
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });
      }
      setInit(true);
    });
  }, []);
  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
    });
  };
  return (
    <React.Fragment>
      {init ? (
        <AppRouter
          refreshUser={refreshUser}
          isLoggedIn = {Boolean(userObj)}
          userObj={userObj} 
        />
      ) : (
         "Initializing..."
      )}
    </React.Fragment>
  );
}

export default App;
