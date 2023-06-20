import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "./firebase/firebase";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({});
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        console.error("error:", error);
      });
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("signOut");
        setUser({});
      })
      .catch(() => {
        console.log("signOut with error");
        setUser({});
      });
  };

  return (
    <div className="App">
      <h1>hello auth</h1>
      <button onClick={handleGoogleSignIn}>google signIn</button>
      <p>User details:{user.displayName} </p>
      <img src={user.photoURL} alt="" />
      <br />
      <button onClick={handleSignOut}>SignOut</button>

    </div>
  );
}

export default App;
