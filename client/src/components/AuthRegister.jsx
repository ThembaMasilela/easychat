import { useState } from "react";

//import AuthPage from "../authPage";
import ChatsPage from "../chatsPage";
import Register from "./Register";

function AuthRegister() {
  const [user, setUser] = useState();

  if (!user) {
    return <Register onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default AuthRegister;
