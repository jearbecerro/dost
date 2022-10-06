/* eslint-disable */
import { Switch, Route, Redirect } from "react-router-dom";
import { useState } from "react";
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";

import Routes from "./helpers/routes";

export default function App() {

  const [account, setaccount] = useState({ _id: "test", exhibitor: "Test", level: "Super Admin"})//{ level: "Super Admin"}

  return (
    <div className="App">
      <Switch>
          
        <Main
        account={account}
        setaccount={setaccount}
        >
          {
            Routes(account).map(( val, k)=>{
              return <Route exact path={val.link} component={ ()=>{ return val.element} } key={k}/>
            })
          }
        </Main>
      </Switch>
    </div>
  );
}

