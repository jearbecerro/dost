/* eslint-disable */
import { Menu, Button } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import moment from "moment";

import logo from "../../assets/images/logo.png";
import bg from "../../assets/images/bg.png";
import Routes from "../../helpers/routes";

function Sidenav({ color, account }) {
  const { pathname } = useLocation();
  function item(list){
    return list.map(( val, k)=>{
      return <Menu.Item key={k}> 
      <NavLink to={val.link} >
        <span
          className="icon"
          style={{
            background: "",
          }}
        >
        <img src={val.icon===null? logo : val.icon}/>
        </span>
        <span className="label">{val.label}</span>
      </NavLink>
    </Menu.Item>
    })
  }
  return (
    <>
      <div className="">
        <center>
        <NavLink to="/">
        <img src={logo} alt="" width={"55%"}/>
        </NavLink>
        <br/>
        <b className="">DOST Caraga</b>
        <br/>
        <img src={bg} width="80%"/>
        </center>
      </div>
      <hr />
      <Menu theme="light" mode="inline">
        { item(Routes(account))}
      </Menu>
      <div className="aside-footer" hidden>
        <div
          className="footer-box"
          style={{
            background: color,
          }}
        >
          <span className="icon" style={{ color }}>
            ?
          </span>
          <h6>Need Help?</h6>
          <p>Please check our docs</p>
          <Button type="primary" className="ant-btn-sm ant-btn-block" >
            <a  href="https://caraga.dost.gov.ph" className="" target="_blank" rel="noreferrer">DOCUMENTATION</a>
          </Button>
        </div>
      </div>
    </>
  );
}

export default Sidenav;
