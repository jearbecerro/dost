/* eslint-disable */
import { useEffect, useState } from "react";

import {
  Row,
  Col,
  Card,
  Button,
  List,
  Descriptions,
  Avatar,
  Radio,
  Switch,
  message,
  Drawer,
  Input,
} from "antd";

import {
  FacebookOutlined,
  YoutubeOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

import BgProfile from "../assets/images/login-bg.png";
import profilavatar from "../assets/images/logo.png";



function Profile({ account, setaccount }) {
  const pencil = [
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z"
        className="fill-gray-7"
      ></path>
      <path
        d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z"
        className="fill-gray-7"
      ></path>
    </svg>,
  ];


  const data = [
    {
      title: "Gegacit Rhum (GR)",
      avatar: profilavatar,
      description: "Authentic Rum from Gegacit, Siargao Island . . . .",
    }
  ];

  const name  = `${account.First_Name} ${account.Middle_Name===""||account.Middle_Name===undefined? "" : Array.from(account.Middle_Name)[0]} ${account.Last_Name} ${account.Suffix}`
  const [opensoc, setopensoc] = useState(true);

  return (
    <>
      <div
        className="profile-nav-bg"
        style={{ backgroundImage: "url(" + BgProfile + ")" }}
      ></div>
    <div className="profile-bg">
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
                  <p>{account["Name_of_Firm/Institution"] } - { account.Sector }</p>
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
              <Radio.Group defaultValue="a">
                <Radio.Button value="a">OVERVIEW</Radio.Button>
                <Radio.Button value="b">TEAMS</Radio.Button>
                <Radio.Button value="c">PROJECTS</Radio.Button>
              </Radio.Group>
            </Col>
          </Row>
        }
      ></Card>

  
      <Col xs={24} className="m-5 p-5">
      <Row gutter={[24, 10]}
     
     >
      <Col span={24} md={14} className="mb-24">
         <Card
           bordered={false}
           title={<h6 className="font-semibold m-0">Profile Information</h6>}
           className="header-solid h-full card-profile-information"
           extra={<Button type="link">{pencil}</Button>}
           bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
         >
           <p className="text-dark">
             {
              account["Are you an exhibitor at the event?"]&&
              <p></p>
             }
           </p>
           <hr className="my-25" />
           <Descriptions title={name}>
             {
              Object.keys(account).map((val, k)=>{
                return <>
                {
                  !["_id", "account", "isAdmin", "Are you an exhibitor at the event?"].includes(val)&&<Descriptions.Item label={val.replaceAll("_", " ")} span={3} key={k}>
                  { account[val]}
                </Descriptions.Item>
                }
                </>
              })
             }
             <Descriptions.Item label="Social" span={3}>
               <a href="/" target="_blank" className="mx-5 px-5">
                 {<YoutubeOutlined style={{ color: "red" }}/>}
               </a>
               <a href="/" target="_blank" className="mx-5 px-5">
                 {<FacebookOutlined style={{ color: "#344e86" }} />}
               </a>
               <a href="/" target="_blank" className="mx-5 px-5">
                 {<InstagramOutlined style={{ color: "#e1306c" }} />}
               </a> 
              <span style={{ cursor: "pointer" }} onClick={()=>{ setopensoc(true) }} className="text-muted">set social links</span>
              <Drawer
              open={opensoc}
              onClose={()=>{setopensoc(false)}}
              title={<b><small>Set Social Links</small></b>}
              >
                <Row gutter={[24, 5]}>
                  <Col xs={24}>
                    <Input size="small" placeholder="https://youtube.com/yourchannel" prefix={<YoutubeOutlined style={{ color: "red", marginRight: 10 }}/>} />
                  </Col>
                  <Col xs={24}>
                    <Input size="small" placeholder="https://facebook.com/yourchannel" prefix={<FacebookOutlined style={{ color: "#344e86", marginRight: 10 }}/>} />
                  </Col>
                  <Col xs={24}>
                    <Input size="small" placeholder="https://instagram.com/yourchannel" prefix={<InstagramOutlined style={{ color: "#e1306c", marginRight: 10  }}/>} />
                  </Col>
                  <Col xs={24}>
                    <Button style={{ float: "right" }} type="primary">
                      SET
                    </Button>
                  </Col>
                </Row>
              </Drawer>
             </Descriptions.Item>
           </Descriptions>
         </Card>
       </Col>
       <Col span={24} md={10} className="mb-24">
         <Card
           bordered={false}
           className="header-solid h-full"
           title={<>
           <h6 className="font-semibold m-0">CMS</h6>
           <small>Show your product by adding image link for a slideshow</small>
           </>}
           
         >
           <ul className="list settings-list">
             <li>
               <h6 className="list-header text-sm text-muted">ACCOUNT</h6>
             </li>
             <li>
               <Switch defaultChecked />

               <span>Email me when someone follows me</span>
             </li>
             <li>
               <Switch />
               <span>Email me when someone answers me</span>
             </li>
             <li>
               <Switch defaultChecked />
               <span>Email me when someone mentions me</span>
             </li>
             <li>
               <h6 className="list-header text-sm text-muted m-0">
                 APPLICATION
               </h6>
             </li>
             <li>
               <Switch defaultChecked />
               <span>New launches and projects</span>
             </li>
             <li>
               <Switch defaultChecked />
               <span>Monthly product updates</span>
             </li>
             <li>
               <Switch defaultChecked />
               <span>Subscribe to newsletter</span>
             </li>
           </ul>
         </Card>
       </Col>
       
       <Col span={24} md={17} className="mb-24">
         <Card
           bordered={false}
           title={<h6 className="font-semibold m-0">My Products</h6>}
           className="header-solid h-full"
           bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
         >
           <List
             itemLayout="horizontal"
             dataSource={data}
             split={false}
             className="conversations-list"
             renderItem={(item) => (
               <List.Item actions={[<Button type="link">VIEW</Button>]}>
                 <List.Item.Meta
                   avatar={
                     <Avatar shape="square" size={48} src={item.avatar} />
                   }
                   title={item.title}
                   description={item.description}
                 />
               </List.Item>
             )}
           />
         </Card>
       </Col>
       <Col span={24} md={7} className="mb-24">
         <Card
           bordered={false}
           title={<h6 className="font-semibold m-0">Logs of My Booth Appearances</h6>}
           className="header-solid h-full"
           bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
         >
           <List
             itemLayout="horizontal"
             dataSource={data}
             split={false}
             className="conversations-list"
             renderItem={(item) => (
               <List.Item actions={[<Button type="link">VIEW</Button>]}>
                 <List.Item.Meta
                   /**
                    * avatar={
                     <Avatar shape="square" size={48} src={item.avatar} />
                   }
                    */
                   title={item.title}
                   description={item.description}
                 />
               </List.Item>
             )}
           />
         </Card>
       </Col>
     </Row>
      </Col>
      </div>
    </>
  );
}

export default Profile;
