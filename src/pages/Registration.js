/* eslint-disable */
import { Row, Col, Card, Form, Input, Select, Button, Popconfirm, Modal, notification, Checkbox } from "antd";
import { DownloadOutlined } from "@ant-design/icons"
import { useState } from "react";
import SignPad from "../elements/signPad"
import { QRCode } from 'react-qrcode-logo'
import { isDesktop, isMobile } from "react-device-detect"
import logo from "../assets/images/logo.png"
import bg from "../assets/images/bg.png"
import api from "../api/api";
const { Option } = Select;
export function Registration(){
    const [form] = Form.useForm();
    const[showModal, setshowModal] = useState(false)
    const [eSign, seteSign] = useState(null)
    const [showQR, setShowQR] = useState(false)
    const [qrtxt, setqrtxt] = useState('{}')
    const [ username, setusername ] = useState("")
    
    const def = {
        "First_Name": "",
        "Middle_Name": "",
        "Last_Name":"",
        "Suffix":"",
        "Sex/Gender":"",
        "Age_Group": "",
        "Phone":"",
        "Occupation":"",
        "Name_of_Firm":"",
        "Address":"",
        "Email_Address":"",
        "Sector":""
    }
    const UI = {
        "First_Name":  { type: "text", value: "", placeholder: "", size: 24, options: [], required: true },
        "Middle_Name": { type: "text", value: "", placeholder: "", size: 24, options: [], required: false },
        "Last_Name": { type: "text", value: "", placeholder: "", size: 24, options: [], required: true },
        "Suffix": { type: "text", value: "", placeholder: "", size: 24, options: [], required: false},
        "Sex/Gender": { type: "select", value: "", placeholder: "", size: 24, options: ["Male", "Female", "Prefer not to say"], required: true },
        "Age_Group": { type: "select", value: "", placeholder: "", size: 24, options: ["20 or below", "21-30", "31-40", "41-50", "51-60",  "61-70", "71-100",  ], required: true },
        "Phone": { type: "text", value: "", placeholder: "", size: 24, options: [], required: true },
        "Occupation": { type: "text", value: "", placeholder: "", size: 24, options: [], required: true, tooltip: "Put student if you are or n/a if not applicable." },
        "Name_of_Firm/Institution": { type: "text", value: "", placeholder: "", size: 24, options: [], required: true, tooltip: "A business name, school if student or just put n/a if not applicable." },
        "Address": { type: "text", value: "", placeholder: "", size: 24, options: [], required: true, tooltip: "Your home or business address" },
        "Email_Address":{ type: "text", value: "", placeholder: "", size: 24, options: [], required: true },
        "Sector": { type: "select", value: "", placeholder: "", size: 24, options: ["Association", "Cooperative", "Individual/Not in Education, Employment or Training",
        "Government", "LGU", "NGO", "OFW", "Private (Sole Proprietor, Entrepreneur, MSME)", "Student", "Others"
        ] , required: true},
        "Are you an exhibitor at the event?": { type: "select", value: "No", placeholder: "", size: 24, options: ["Yes", "No"], required: true },
    }
    const [name, setname] = useState("yourQrCode")
    function TypeRenderer(data, label){
        const type = data.type
        if(type==="text"||type==="email"||type==="number"){
            return <Input type={type} placeholder={label.replaceAll("_", " ")} style={{ }} />
        } else if(type==="select"){
            return <Select
            placeholder={label}
            allowClear
            style={{ width: "100%", color: "black", backgroundColor: "transparent"  }} 
            onSelect={val=>{
                console.log(val)
            }}
            >
            {
                data.options.map((val, k)=>{
                    return <Option value={val} key={k} >
                    <Row gutter={[24,0]}>
                        <Col md={24}>
                            {val}
                        </Col>
                    </Row>
                </Option>
                })
            }
            </Select>
        } else {
            // date, datetime daterange etc..
            return <></>
        }
        
    }
    function Content(UI){
        const keys = Object.keys(UI)
        const values = Object.values(UI)
            
        return keys.map((label, k)=>{
              return   <Col xs={24} lg={12}>
              <Form.Item
              label={<p style={{margin:0, color: "black", fontWeight: "", fontSize: 15}}>{ label.replaceAll("_", " ") }</p>}
              name={label}
              tooltip={values[k].tooltip!==undefined? values[k].tooltip : values[k].required? "Put `n/a` if not applicable." : null}
              rules={[
              {
                  required: values[k].required,//false,
                  message: `${label.replaceAll("_", " ")} is required!`,
              },
              ]}
              >
                  {TypeRenderer(values[k], label.replaceAll("_", " "))}
              </Form.Item>
              </Col>
            })
    }

    async function save(values){
        try {
            if(agree===false){
                notification.warn({
                    message: "Data Privacy Policy",
                    description: "Please accept our consent to data privacy!"
                })
            } 
           
            if(agree) {
                //save db
                //values.eSignature = new Buffer(eSign.split(",")[1],"base64")
                const f = Array.from(values.First_Name)[0]
                const m = values.Middle_Name===""||values.Middle_Name===undefined? "" : Array.from(values.Middle_Name)[0]
                const lname = values.Last_Name
                const uname = `${f+m+lname}`.toLowerCase()
                setusername(uname)
                values.account = { username: uname.replaceAll(" ",""), password: `caragarstw2022` }
                values.isAdmin = false
                await api.add(
                    {
                        db: 'RSTW', col: "clients",
                        data: values
                    }
                ).then(res=>{
                    const data = res.data
                    const n = `${values.First_Name} ${values.Middle_Name===""||values.Middle_Name===undefined? "" : Array.from(values.Middle_Name)[0]}. ${values.Last_Name} ${values.Suffix}`
                    setname(n)
                    let qr = {}
                    if(data.msg==="Already Registered!"){
                        //delete data.res.eSignature
                        delete data.res.account.password

                        console.log(data.res)

                        setShowQR(true)
                        qr = { _id: data.res._id, name: n, "Name_of_Firm/Institution": values["Name_of_Firm/Institution"], sector: values.Sector }
                        setqrtxt(JSON.stringify(qr))
                        notification.info({
                            message: data.msg,
                            description: "Here is your QR Code."
                        })
                    } else {
                        delete values.account.password
                        qr = { _id: data.res.insertedId, name: n, "Name_of_Firm/Institution": values["Name_of_Firm/Institution"], sector: values.Sector }
                        setqrtxt(JSON.stringify(qr))
                        setShowQR(true)
                        notification.success({
                            message: "Successfully Registered!",
                            description: "Please save your qrcode for the event!"
                        })
                    }
                    
                }).catch(err=>{
                    notification.error({
                        message: "Server Error",
                        description: err.message
                    })
                })
            }
        } catch (err) {
            console.log(err.message)
            notification.error({
                message: "System Error",
                description: err.message
            })
        }
    }
    function clear(){
        setname("yourQRcode")
        setusername("")
        seteSign(null)
        form.resetFields()
        setqrtxt("N/A")
    }
    function download(){
        const canvas = document.getElementById("qrcode");
        if(canvas) {
        const pngUrl = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl
        downloadLink.download = `${name.replaceAll(" ","").replaceAll(".","").toLowerCase()}.png`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        }
    }

    const [agree, setagree] = useState(false);
    return <>
    <Modal
    //centered
    open={showModal}
    closable={false}
    footer={null}
    >
    <Col xs={24}>
              <Card.Grid
                bordered
                style={{ 
                  borderSize: 5, width: "100%", height:  400,
                  padding: 0
                }}
                >
                  <SignPad
                  seteSign={seteSign}
                  setshowSignPad={setshowModal}
                  />
                  <hr/>
                  
              </Card.Grid>
            </Col>
    </Modal>
    <Modal
     open={showQR}
     title={
     <>
     <center>
        <Button type="link" className="text-primary" onClick={() => { download(); setShowQR(false); clear()}}>
        <DownloadOutlined /> DOWNLOAD
    </Button>
    
     </center>
     </>}
     footer={
        <center>
            <small style={{ textAlign: "left"}}>
            <br/>
             Username: <b>{username}</b> <br/>
            Password: <b style={{ textDecoration: "line-through" }}>caragarstw2022</b>
            </small> 
        </center>
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
    <Card 
    style={{ marginTop: 20 }}
    className=""
    title={<center>
    <h4>REGISTRATION</h4>
    <small>Ignore if you're already registered.</small> <br/>
    </center>}
    actions={[
        <center>
            <Popconfirm placement="top" title={"Are you sure you want to clear the form?"} onConfirm={()=>{
               clear();
            }} okText="Yes" cancelText="No">
                <Button type="danger" style={{ marginRight: 20}}>CLEAR</Button>
            </Popconfirm>
            <Button type="primary"
            onClick={()=>{
               form.submit()
               
            }}
            >REGISTER</Button>
        </center>
    ]}
    >
    <Form
        form={form}
        initialValues={def}
        onFinish={values=>{save(values)}}
        onFinishFailed={err=>{
            notification.warning({
                message: "Please fill in the form completely and correctly!"
            })
        }}
        layout="vertical"
                >  
   
        
        <Row gutter={[20,5]} className="ml-5 mr-5">
            {Content(UI)}
            <Col xs={24} lg={12} hidden>
            <Button type="link"
            onClick={()=>{ setshowModal(true)}}
            >
            {eSign===null? "Set eSignature" : "Change eSignature" }
            </Button>
            {
            eSign!==null&&
            
            <center>
                <img alt="🚫"style={{ padding: 20 }}src={eSign}/>
            </center>
            }
            <hr/>
            </Col>
            <Col xs={24}>
                <Checkbox 
                value={agree}
                onChange={()=>{
                    setagree(!agree)
                }}
                ><p className="text-muted" style={{ textAlign: "justify" }} >
                    {`DATA PRIVACY CONSENT: 
                    By filling-out this form, you agree with the Data Privacy Policy of the Department of Science & Technology Regional Office XIII (DOST XIII) and the National Privacy Commission (NPC). 
                    Both personal and non-personal information may be collected from you for using this form. 
                    Rest assured that these data shall be kept safe and secured, and will not be shared with anyone except to designated personnel who will process the needed information only for facilitating smooth participation and distribution of materials for such event. 
                    The collective information derived from this event will be useful for the improvement of implementing similar activities in the future.`}
                </p></Checkbox>
            </Col>
        </Row>
       
   
        
    </Form>
    </Card>
    </>
}