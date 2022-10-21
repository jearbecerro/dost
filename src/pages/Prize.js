/* eslint-disable */
import { Row, Col, Modal, Form, Button, Input, Card } from "antd";
import Spin2Win from "../components/Spin2Win/Spin2Win";
import { isMobile } from "react-device-detect";

import wheel from '../assets/img/wheel.png'
import pointer from '../assets/img/pin.png'
import pointer1 from '../assets/img/pointer1.png'
import { useState } from "react";

const data = {
    1: "1-Random Token",
    2: "Not for now",
    3: "3-Random Token",
    4: "Sorry for now",
    5: "5-Random Token",
    6: "Please Try Again",
    7: "7-2 Random Tokens",
    8: "8-3 Rand",
  };

export default function Prize({}){
    const [spin, setspin] = useState(false)
    const [winner, setwinner] = useState(false)
    const [congrats, setcongrats] = useState(true)
    const [prize, setprize] = useState(null)
    const [form] = Form.useForm()
    return <>
    <Modal
    closable={false}
    title={null}
    footer={null}
    open={true}
    width="100%"
    >
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
      />

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
        console.log(values)
        setcongrats(false)
        setprize(null)
      }}
      align="inline"
      >
      <Row gutter={[24,0]}>
        <Col xs={24} className="text-center">
          <h1>Congratulations!</h1>
          <span className="">You Win</span> 
          {
            prize!==null&& <b style={{ fontWeight: "bold" }}> {prize.split("-")[1]}!</b>
          }
            <marquee
            style={{ background: "green", color: "white"}}
            >Claim you prize at RSTW Secretariat Booth, Main Annex - Robinsons Place Butuan!
            </marquee>
        </Col>
        <Col xs={24} className="text-center"><small>Please enter your details to claim the price!</small></Col>
        <Card>
        <Row gutter={[24, 5]}>
          <Col xs={24} lg={12}>
            <Form.Item
            name="fullname"
            label="Fullname"
            required
            >
              <Input type="text" placeholder="John Doe"/>
            </Form.Item>
          </Col>
          <Col xs={24} lg={12}>
            <Form.Item
            name="phone_number"
            label="Phone Number"
            required
            >
              <Input type="text" placeholder="09123456789" />
            </Form.Item>
          </Col>
        </Row>
        </Card>
        <Col xs={24}>
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