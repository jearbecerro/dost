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
  notification,
} from "antd";
import ReactApexChart from "react-apexcharts"

import {
  FacebookOutlined,
  YoutubeOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

import BgProfile from "../assets/images/login-bg.png";
import profilavatar from "../assets/images/logo.png";
import { NavLink, useHistory } from "react-router-dom";
import Barcharts from "../elements/barcharts";
import Piecharts from "../elements/piecharts";



function Profile({ account, setaccount }) {
  const history = useHistory()
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
      title: "Product Name",
      avatar: profilavatar,
      description: "Product description. . . .",
    }
  ];

  const name  = `${account.First_Name} ${account.Middle_Name===""||account.Middle_Name===undefined? "" : Array.from(account.Middle_Name)[0]}. ${account.Last_Name} ${account.Suffix}`
  const [opensoc, setopensoc] = useState(false);
  const [tab, settab] = useState("a")

  const [appearances, setappearances] = useState([0,0,0,0,0])
  const [sales, setsales] = useState([0, 0, 0, 0, 0])

  return (
    <>
      <div
        className="profile-nav-bg"
        style={{ backgroundImage: "url(" + BgProfile + ")" }}
      ></div>
    <div className="profile-bg" style={{ height: "100%" }}>
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
              <Radio.Group value={tab} onChange={e=>{
                const val = e.target.value
                if(val==="qr"){
                  history.push("/dost/QR-Code-Scanner")
                } else {
                  settab(val)
                }
              }}>
                <Radio.Button value="a">OVERVIEW</Radio.Button>
                <Radio.Button value="b">PROFILE</Radio.Button>
                <Radio.Button value="c">PRODUCTS</Radio.Button>
                <Radio.Button value="qr">QRCode Scanner</Radio.Button>
              </Radio.Group>
            </Col>
          </Row>
        }
      ></Card>

  
      <Col xs={24} className="m-5 p-5">
      <Row gutter={[24, 10]}
     
     >
      
       <Col span={24} md={13} className="mb-24" hidden={tab!=="a"}>
         <Card
           bordered={false}
           className="header-solid h-full"
           title={<>
           <h6 className="font-semibold m-0">Dashboard</h6>
           <small>Overview</small>
           </>}
           
         >
          <Row gutter={[24, 5]}>

            <Col xs={24} lg={12}>
              <Piecharts 
                title={`R&D Rate`}
                data={[0,0,0]}
                labels={[`Excelent`,`Satisfactory`,`Unsatisfactory`]}
                theme={"3"}
                type={"pie"}
                lpos="left"
              />
            </Col>

            <Col xs={24} lg={12}>
              <Barcharts 
              title={`Booth Apperances N=${appearances.reduce((a, b) => a + b, 0)}`}
              data={appearances}
              label={'Apperances'}
              colors={['#1276C7']}
              />
            </Col>

            <Col xs={24} lg={12}>
            <Piecharts 
                title={`Product Sales N=${'0'}`}
                data={[0,0,0]}
                labels={[``,``,``]}
                theme={"7"}
                type={"donut"}
                lpos="right"
              />
            </Col>
           
            <Col xs={24} lg={12}>
             
            <Barcharts 
              title={`Booth Sales N=${sales.reduce((a, b) => a + b, 0)}`}
              data={sales}
              label={'Sales'}
              colors={['#C73612']}
              />
               <Button type="link" style={{ float: "right" }}>Set Sales</Button>
            </Col>
          </Row>
         </Card>
       </Col>
       <Col span={24} md={tab==="b"? 24 : 11} className="mb-24" hidden={tab!=="b"&&tab!=="a"}>
         <Card
           bordered={false}
           title={<h6 className="font-semibold m-0" 
           >Profile Information</h6>}
           className="header-solid h-full card-profile-information"
           extra={<Button type="link"
           onClick={()=>{
            notification.info({
              message: "Currently unavailable!",
              description: "For updating profile information."
            })
           }}
           >{pencil}</Button>}
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
                    <Input size="small" placeholder="https://facebook.com/yourpage" prefix={<FacebookOutlined style={{ color: "#344e86", marginRight: 10 }}/>} />
                  </Col>
                  <Col xs={24}>
                    <Input size="small" placeholder="https://instagram.com/yourprofile" prefix={<InstagramOutlined style={{ color: "#e1306c", marginRight: 10  }}/>} />
                  </Col>
                  <Col xs={24}>
                    <Button style={{ float: "right" }} type="primary"
                    onClick={()=>{
                      notification.info({
                        message: "Currently Unavailable!",
                        description: "For setting social links."
                      })
                    }}
                    >
                      SET
                    </Button>
                  </Col>
                </Row>
              </Drawer>
             </Descriptions.Item>
           </Descriptions>
         </Card>
       </Col>
       <Col xs={24} hidden={tab!=="c"&&tab!=="a"}>
       <center>
       <Col span={24} md={17} className="mb-24">
         <Card
           bordered={false}
           title={<Row>
            <Col xs={24} lg={17}>
            <h6 className="font-semibold m-0" style={{ float: "left" }}>My Products</h6>
            </Col>
            <Col xs={24} lg={7} >
              <Button type="link" 
              style={{ float: "right" }}
              onClick={()=>{
                notification.info({
                  message: "Currently Unavailable!",
                  description: "For adding products."
                })
              }}>
                ADD
              </Button>
            </Col>
           </Row>}
           className="header-solid h-full"
           bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
         >
           <List
             itemLayout="horizontal"
             dataSource={data}
             split={false}
             className="conversations-list"
             renderItem={(item) => (
               <List.Item actions={[<Button type="link"
               onClick={()=>{
                notification.info({
                  message: "Currently Unavailable!",
                  description: "For viewing product."
                })
               }}
               >VIEW</Button>]}>
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
       </center>
       </Col>
       <Col span={24} md={7} className="mb-24" hidden>
         <Card
           bordered={false}
           title={<NavLink to="/dost/Logs"><h6 className="font-semibold m-0">Logs of My Booth Appearances</h6></NavLink>}
           className="header-solid h-full"
           bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
         >
           <List
             itemLayout="horizontal"
             dataSource={data}
             split={false}
             className="conversations-list"
             renderItem={(item) => (
               <List.Item actions={[<Button type="link" onClick={()=>{
                notification.info({
                  message: "Currently Unavailable",
                  description: "Redirected to Logs Page"
                })
                history.push('/dost/Logs')
               }}>VIEW</Button>]}>
                 <List.Item.Meta
                   /**
                    * avatar={
                     <Avatar shape="square" size={48} src={item.avatar} />
                   }
                    */
                   title={'Day 1 . .'}
                   description={''}
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
