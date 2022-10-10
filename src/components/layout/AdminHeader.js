/* eslint-disable */
import { useEffect, useState } from "react";

import {
  Row,
  Col,
  Card,
  Avatar,
  Radio,
  Popconfirm,
} from "antd";

import BgProfile from "../../assets/images/login-bg.png";
import profilavatar from "../../assets/images/logo.png";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { QuestionCircleOutlined } from '@ant-design/icons';


function AdminHeader({ account, setaccount }) {
    const history = useHistory()
    const location = useLocation()

    const name  = `${account.First_Name} ${account.Middle_Name===""||account.Middle_Name===undefined? "" : Array.from(account.Middle_Name)[0]}. ${account.Last_Name} ${account.Suffix}`

    const [tab, settab] = useState(location.pathname==="/dost/attendance"? "b" : "c")


    return (
        <>
        <div
            className="profile-nav-bg"
            style={{ backgroundImage: "url(" + BgProfile + ")" }}
        ></div>
        {
        account.isAdmin&&<div className="profile-bg" style={{ height: "100%" }}>
        <Card
            className="card-profile-head"
            bodyStyle={{ display: "none" }}
            title={
            <Row justify="space-between" align="middle" gutter={[24, 0]}>
                <Col span={24} md={12} className="col-info">
                <Avatar.Group>
                    <Avatar size={74} shape="square" src={profilavatar} />

                    <div className="avatar-info">
                    {
                    account["Are you an exhibitor at the event?"]==="Yes"? 
                    <>
                    <h4 className="font-semibold m-0">{ account["Name_of_Firm/Institution"] }</h4>
                    <p>{ name }</p>
                    </>
                    :
                    <>
                    <h4 className="font-semibold m-0">{ name }</h4>
                    <p>Super Admin</p>
                    </>
                    }
                    
                    </div>
                </Avatar.Group>
                </Col>
                <Col
                span={24}
                md={12}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                }}
                >
                <Radio.Group defaultValue={location.pathname}>
                    <NavLink to="/dost"><Radio.Button value={'/dost'}>DASHBOARD</Radio.Button></NavLink>
                    <NavLink to="/dost/attendance"><Radio.Button value={'/dost/attendance'}>ATTENDANCE</Radio.Button></NavLink>
                    <NavLink to="/dost/exhibitors"><Radio.Button value={'/dost/exhibitors'}>EXHIBITORS</Radio.Button></NavLink>
                    <Popconfirm
                    placement="bottomLeft" icon={<QuestionCircleOutlined style={{ color: 'skyblue' }} />} title={"Are you sure to signout"} 
                    onConfirm={()=>{ 
                      localStorage.removeItem("account")
                      setaccount(null)
                      history.push("/dost/")
                     }} 
                    okText="Yes" cancelText="No"
                    >
                    <Radio.Button value="so">Sign Out?</Radio.Button>
                    </Popconfirm>
                </Radio.Group>
                </Col>
            </Row>
            }
        ></Card>
        </div>
        }
        </>
    );
}

export default AdminHeader;
