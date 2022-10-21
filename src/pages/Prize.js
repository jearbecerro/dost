/* eslint-disable */
import { Row, Col, Modal, Form, Button, Input, Card, Popover } from "antd";
import Spin2Win from "../components/Spin2Win/Spin2Win";
import { isMobile, isDesktop } from "react-device-detect";
import { QRCode } from 'react-qrcode-logo'
import logo from "../assets/images/logo.png"
import wheel from '../assets/img/wheel.png'
import headlogo from '../assets/images/headlogo.png'
import pointer from '../assets/img/pin.png'
import pointer1 from '../assets/img/pointer1.png'
import { useState } from "react";
import api from "../api/api";
import moment from "moment";
import { DownloadOutlined, UserSwitchOutlined } from "@ant-design/icons";
import BgProfile from "../assets/images/4.jpg";
import { Link } from "react-router-dom";

const data = {
    1: "1-1 Random Token",
    2: "Not for now",
    3: "3-1 Random Token",
    4: "Sorry for now",
    5: "5-1 Random Token",
    6: "Please Try Again",
    7: "7-2 Random Tokens",
    8: "8-3 Random Tokens",
  };

export default function Prize({}){
    const [spin, setspin] = useState(false)
    const [winner, setwinner] = useState(false)
    const [congrats, setcongrats] = useState(false)
    const [prize, setprize] = useState(null)
    const [form] = Form.useForm()

    async function saveWinner(values){
      values.prize = prize
      values.date = moment().format("MM-DD-YYYY")
      values.time = moment().format("hh:mm A")
      values.claimed = false
      //setqrtxt(JSON.stringify(values))
      await api.add({
        "db": "RSTW",
        "col": "spin_winners",
        "query": { },
        "data": values
      }).then(res=>{
        values._id = res.data.res.insertedId
        setqrtxt(JSON.stringify(values))
        setcongrats(false)
        setprize(null)
        setShowQR(true)
      }).catch(err=>{
        console.log(err.message)
        setcongrats(false)
        setprize(null)
      })
    }
    const [showQR, setShowQR] = useState(false)
    const [qrtxt, setqrtxt] = useState('{}')

    function download(){
      const canvas = document.getElementById("qrcode");
      if(canvas) {
      const pngUrl = canvas
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");
      let downloadLink = document.createElement("a");
      downloadLink.href = pngUrl
      downloadLink.download = `${moment()}.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      }
    }
    return <>
     
    <Modal
     open={showQR}
     title={
     <>
     <center>
        <Button type="link" className="text-primary" onClick={() => { download(); setShowQR(false); form.resetFields(); setqrtxt("{}")}}>
          <DownloadOutlined /> DOWNLOAD
        </Button><br/>
        <small>Download and present this to claim your prize!</small>
     </center>
     </>}
     footer={
      null
     }
     closable={false}
     //onCancel={()=>{ setShowQR(false); clear()}}
    >
    <center>
    <QRCode 
        id={"qrcode"}
        value={qrtxt}
        qrStyle="dots"
        size={isDesktop? 300 : 150}
        bgColor="#FFFFFF"
        fgColor="#030303"//#0284DB
        logoImage={logo}
        logoWidth={isMobile? 50: 100}
        logoOpacity={0.3}
   />
    </center>
    </Modal>
    <Modal
    closable={false}
    title={null}
    footer={null}
    open={true}
    width="100%"
    
    >
       <div className="setting-drwer">
          <Popover trigger={"onhover"}content="Sign In?" placement="left">
          <Link to="/sign-in">
            <UserSwitchOutlined/>
         </Link>
          </Popover>
        </div>
      <Col xs={24}>
        <Card style={{ backgroundImage: "url(" + BgProfile + ")", backgroundSize: "cover"}}>
        
        <center>
        <img src={headlogo} width={"30%"}/> <br/>
        </center>
          <Spin2Win
          wheel={wheel}
          pointer={pointer1}
          data={data}
          spin={spin}
          setspin={setspin}
          winner={winner}
          setwinner={setwinner}
          winning_numbers={[1,3,5,7, 8]}
          setcongrats={setcongrats}
          setprize={setprize}
          setqrtxt={setqrtxt}
          />
        </Card>
      </Col>
      <Modal
        centered
        closable={false}
        title={null}
        footer={null}
        open={congrats}
        width={isMobile? "100" : "50%"}
      > 
      <Form
      form={form}
      initialValues={{}}
      onFinish={values=>{
        saveWinner(values)
      }}
      alignment="horizontal"
      >
      <Row gutter={[24,0]}>
        <Col xs={24} className="text-center">
          <h1>Congratulations!</h1>
          <span className="">You Won</span> 
          {
            prize!==null&& <b style={{ fontWeight: "bold" }}> {prize.split("-")[1]}!  </b>
          }
            <div
            style={{ background: "green", color: "white"}}
            >Claim your prize at RSTW Secretariat Booth, Main Annex - Robinsons Place Butuan!
            </div>
        </Col>
        <Col xs={24} className="text-center"><small>Please enter your details to claim the price!</small></Col>
        <Col xs={24}>
        <Card>
        <Row gutter={[24, 5]}>
          <Col xs={24}>
            <Form.Item
            name="fullname"
            label="Fullname"
            rules={[
              { required: true, message: "Please input your fullname!" },
            ]}
            >
              <Input type="text" placeholder="e.g. John Doe"/>
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Form.Item
            name="phone_number"
            label="Phone Number"
            rules={[
              { required: true, message: "Please input your phone number!" },
            ]}
            >
              <Input type="text" placeholder="e.g.09123456789" />
            </Form.Item>
          </Col>
        </Row>
        </Card>
        </Col>
        <Col xs={24} className="mt-3">
          <center>
            <Button
            onClick={()=>{
              form.submit()
            }}
            >
              SUBMIT
            </Button>
          </center>
        </Col>
      </Row>
      </Form>
      </Modal>
    </Modal>
    </>
}