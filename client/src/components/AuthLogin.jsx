import { useState } from "react";

//import AuthPage from "../authPage";
import ChatsPage from "../chatsPage";
import Login from "./Login";
//import Navbar from "./Navbar";

function AuthLogin() {
  const [user, setUser] = useState();

  if (!user) {
    return <Login onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default AuthLogin;
