import './App.css';
import { getAuth, signInWithPopup } from 'firebase/auth';
import app from './firebase/firebase.init';
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from 'react';
import { GithubAuthProvider } from "firebase/auth";
import { signOut } from "firebase/auth";



const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();


function App() {
  const [user, setUser] = useState();
  const handleGoogleLogIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);

      }).catch((error) => {
        console.log(error);

      });


  }

  const handleGitHubLogIn = () => {
    //console.log('github');
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
      }).catch((error) => {
        console.log(error);
      });



  }

  const handleSignOut = () => {
    signOut(auth).then(() => {
      setUser({})
      // Sign-out successful.
    }).catch((error) => {
      console.log(error);
      // An error happened.
    });

  }
  return (
    <div className="App">
      {
        user?.uid ? <button className='google-button' onClick={handleSignOut}> Sign Out</button> : <>
          <button className='google-button' onClick={handleGoogleLogIn}>Sign in with google</button>
          <button className='google-button' onClick={handleGitHubLogIn}>Sign in with Github</button>
        </>
      }

      {
        user?.uid && <div>
          <h2>Name : {user?.displayName}</h2>
          <h3>Email: {user?.email}</h3>
          <img src={user.photoURL} alt="user photo" />

        </div>
      }

    </div >
  );
}

export default App;
