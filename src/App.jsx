import React, { useState, useEffect }  from "react";
import "./App.css";
import UserTable from "./components/UserTable";
import RequestService from "./eventsListen/requestService";

function App() {
  const [usersInfo, setUsersInfo] = useState([]);
  const requestService = new RequestService();

  useEffect(() => {
    const someFunc = async()=>{
      let lol =  await requestService.getAllUsers();
      setUsersInfo(lol);
      console.log("lol", lol);
  
    }
    someFunc();  
  },[]);

  // useEffect(()=>{
  //   console.log("usersInfo", usersInfo);
  // },[usersInfo])
  

  return (
    <div className="App">
      <header className="App-header">
        <p>Hi</p>
        <UserTable usersData="Aaaa" usersInfo={usersInfo}></UserTable>
      </header>
    </div>
  );
}

export default App;
