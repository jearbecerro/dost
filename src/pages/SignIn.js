
import React from "react";
import {
  Layout,
  Button,
  Typography,
  Card,
  Form,
  Input,
  Checkbox,
  notification,
} from "antd";

import { Link } from "react-router-dom";
import Footer from "../components/layout/Footer";
import rstw from "../assets/images/bg.png"
import logos from "../assets/images/logos.png"
import signupsub from "../assets/images/signup-sub.png"
import api from "../api/api";
import { useHistory } from "react-router-dom";

const { Title } = Typography;
const { Content } = Layout;

export default function SignIn({ setaccount }){
    const history = useHistory()
    const onFinish = async(values) => {
      const username = values.Username
      const password = values.Password
      const remember= values.remember
      console.log(remember)
      await api.login(username, password)
      .then(res=>{
        const data = res.data
        if(data!==null){
          delete data.account.password
          setaccount(data)
          if(remember===true){
            localStorage.setItem("account", JSON.stringify(data))
          }
          history.push("/dost/")
        } else {
          notification.warning({
            message: "Invalid Account!",
            description: "Please check your account and try again."
          })
        }
      }).catch(err=>{
        notification.error({ message: err.message})
      })
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };

    return (
      <>
        <div className="">
          <Content className="p-0" style={{ marginTop: 60 }}>
            <div className="sign-up-header">
              <div className="content" style={{ marginTop: -90 }}>
                <Title><img src={rstw} alt="RSTW 2022" /></Title>
                <p className="text-lg">
                <img src={signupsub} alt="Kabalikat sa Maunlad at Matatag na Kinabukasan" />
                </p>
              </div>
            </div>

            <Card
              className="card-signup header-solid h-full ant-card pt-0"
              title={<h5>Sign In</h5>}
              bordered="false"
            >
              <div className="sign-up-gateways mb-5" >
                <img src={logos} alt="Science for the people" width={"90%"} />
              </div>
              <Form
                name="basic"
                initialValues={{ remeber: false }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                className="row-col"
              >
                <Form.Item
                  name="Username"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input placeholder="Username" />
                </Form.Item>
                <Form.Item
                  name="Password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password placeholder="Password" style={{ paddingTop: 0, paddingBottom: 0 }}/>
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked">
                  <Checkbox>
                    Remember me
                  </Checkbox>
                </Form.Item>

                <Form.Item>
                  <Button
                    style={{ width: "100%" }}
                    type="primary"
                    htmlType="submit"
                  >
                    SIGN IN
                  </Button>
                </Form.Item>
              </Form>
              <p className="font-semibold text-muted text-center">
                {" "}
                <Link to="/Activities" className="font-bold text-dark">
                  View Activities
                </Link>
              </p>
            </Card>
          </Content>
        </div>
        <center><Footer/></center>
      </>
    );
}
