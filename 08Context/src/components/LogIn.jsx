import React, { useState, useContext } from "react";
import UserContext from "../../context/UserContext";

function LogIn() {
  const [username, setUsername] = useState("");
  const [passsword, setPassword] = useState("");
  const {setUser} = useContext(UserContext)
  const handleSubmit = (e) => {
    e.preventdefault;
    // console.log("hello")
    setUser({username,passsword})
    console.log("hello")
  };
  return (
    <div>
      <h2>login</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
     
      />
       {" "}
      <input
        type="text"
        placeholder="password"
        value={passsword}
        onChange={((e) => setPassword ( e.target.value))}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default LogIn;
