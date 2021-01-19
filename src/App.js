import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import firebase from "./firebase";

function App() {
  const [user, setUser] = useState({});
  const provider = new firebase.auth.GoogleAuthProvider();
  const handleSign = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;

        setUser(result.user);
        // ...
        console.log(result.user);
      });
  };

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection("datas");

  function getDatas() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setUsers(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getDatas();
  }, []);

  if (loading) {
    return <h1 className="App">Loading...</h1>;
  }

  return (
    <div className="App">
      <h1>Users</h1>
      {users.map((user) => (
        <div key={user.mobile}>
          <h2>{user.name}</h2>
          <h2>{user.email}</h2>
        </div>
      ))}
      <button onClick={handleSign}>SignIn</button>
      <h1>Welcome {user.displayName}</h1>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
