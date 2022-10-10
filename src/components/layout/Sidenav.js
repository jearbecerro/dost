/* eslint-disable */
import { Menu, Button, Popconfirm } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import moment from "moment";
import { QuestionCircleOutlined } from '@ant-design/icons';
import logo from "../../assets/images/logo.png";
import bg from "../../assets/images/bg.png";
import Routes from "../../helpers/routes";
import { useHistory } from "react-router-dom";

function Sidenav({ color, account, setaccount, setVisible }) {
  const { pathname } = useLocation();
  const history = useHistory()
  function item(list){
    return list.map(( val, k)=>{
      return val.notInSidebar === undefined&& <Menu.Item key={k}> 
      <NavLink to={val.link} onClick={()=>{ setVisible(false)}}>
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
        <NavLink to="/dost/">
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
        { item(Routes(account, setVisible))}
        <Menu.Item> 
        {
          account!==null&&<Popconfirm 
          placement="topLeft" icon={<QuestionCircleOutlined style={{ color: 'skyblue' }} />} title={"Are you sure to signout"} 
          onConfirm={()=>{ 
            localStorage.removeItem("account")
            setaccount(null)
            history.push("/dost/")
           }} 
          okText="Yes" cancelText="No"
          >
          <Button
          style={{ float: "right" }}
          type="link"
          >
          <b className="text-muted">Sign Out?</b>
          </Button>
          </Popconfirm>
        }
        </Menu.Item>
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
