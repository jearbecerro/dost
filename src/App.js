/* eslint-disable */
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";

import Routes from "./helpers/routes";

export default function App() {
  const cachedAcc = localStorage.getItem("account")
  const [visible, setVisible] = useState(false);
  const [account, setaccount] = useState(cachedAcc!==undefined||cachedAcc!==null? JSON.parse(cachedAcc): null)//{ level: "Super Admin"}
  const location = useLocation();
  useEffect(()=>{
    //for github reload redirect
    if(window.location.href!=="https://jearbecerro.github.io/dost"){
      window.location.href = "https://jearbecerro.github.io/dost"
    }
  }, [])
  return (
    <div className="App">
      <Switch>
          
        <Main
        account={account}
        setaccount={setaccount}
        >
          {
            Routes(account, setaccount).map(( val, k)=>{
              return <Route exact path={val.link} component={ ()=>{ return val.element} } key={k}/>
            })
          }
          <Redirect from="*" to={"/dost"} /> {
            //account!==null? location.pathname : 
          }
        </Main>
      </Switch>
    </div>
  );
}

