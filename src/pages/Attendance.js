/* eslint-disable */
import { Card, Row, Col, Table, Button, Drawer, Form, Input, Select, notification, Badge, DatePicker, TimePicker } from "antd";
import { useState, useEffect } from "react";
import moment from "moment"
import api from "../api/api";
import { DownCircleOutlined, ReloadOutlined } from "@ant-design/icons";
import { CSVLink } from "react-csv";
import { DynamicSearch } from "@jearbecerro/dynamicsearch"
import Search from "antd/lib/transfer/search";

export default function Attendance({ account, setaccount }) {

  const [logs, setlogs] = useState(null)
  const [reslogs, setreslogs] = useState(null)
  const [exh, setexh] = useState(null)
  const headers = [
    { label: "Date Appeared", key: "Date" },
    { label: "Name", key: "Name" },
    { label: "Firm/Institution", key: "Firm/Institution" },
    { label: "Exhibitor", key: "Exhibitor" }
  ]
  function download(){
    try {
      const l = reslogs!==null? reslogs : logs
      let d = []
      if(l!==null){
        for(let i=0; i<l.length; i++){
          const val = l[i]
          d.push({ 
            Date: `${val.date} ${val.time}`, Name: JSON.parse(val.appeared).name, "Firm/Institution": val["Name_of_Firm/Institution"],
            "Booth Visited": val.exhibitor_name
           })
        }
        return d
      } else {
        return []
      }
    } catch (err) {
      console.log(err.message)
      return []
    }
  }
  const column = [
    { 
        width: "15%",
        title:  "DATE APPEARED",
        sorter: {
            compare: (a, b) => moment(`${b.date} ${b.time}`) - moment( `${a.date} ${a.time}`),
          },
        render: val => (
            <Col style={{ fontSize:13 }}>
                {moment(`${val.date} ${val.time}`).format("MMMM DD, YYYY @ hh:MM A")}
            </Col>
        ),
        key: "date"
    },
    { 
        title:  "NAME",
        render: val => ( <>{JSON.parse(val.appeared)["name"]}</>)
    },
    {
        title: "FIRM/INSTITUTION",
        render: val =>(<>{JSON.parse(val.appeared)["Name_of_Firm/Institution"]}</>)
    }
    ,
    {
        title: "BOOTH VISITED",
        render: val =>(<>{val.exhibitor_name}</>)
    }
  ]
  const [loading, setloading] = useState(false)
  async function getLogs(query){
    setloading(true)
    await api.get({
        db: "RSTW", col: "appeared",
        query: query
    }).then(res=>{
        setlogs(JSON.stringify(res.data)==="[]"? null : res.data)
        setloading(false)
    }).catch(err=>{
        console.log(err.message)
        setlogs(null)
        setloading(false)
    })
  }
  async function getExhibitors(){
    await api.get({
      db: "RSTW", col: "clients",
      query: { "Are you an exhibitor at the event?": "Yes" }
  }).then(res=>{
    console.log(res.data)
    setexh(JSON.stringify(res.data)==="[]"? null : res.data)
  }).catch(err=>{
      console.log(err.message)
      setexh(null)
  })
  }
  useEffect(()=>{
      getLogs({})
      getExhibitors()
  }, [])

  const [opens, setopens] = useState(false)
  const [form] = Form.useForm()
  const def = {
    date: "",
    exhibitor: "",
    time: ""
  }

  function Search(values){
    values.date = values.date!==""? moment(values.date).format("MM/DD/YYYY") : ""
    values.time = values.time!==""? moment(values.time).format("hh:mm a") : ""
    for(let i=0; i<Object.keys(values).length; i++){
      if(values[Object.keys(values)[i]]===""||values[Object.keys(values)[i]]==="Invalid date"){
        delete values[Object.keys(values)[i]]
      }
    }
    console.log(values)
    setopens(false)
    setonsearch(true)
    const res = DynamicSearch(values, logs)
    if(JSON.stringify(res)==="[]"){
      notification.info({ message: "No Result Search!"})
    } else {
      notification.success({ message: "Searched!", description: `with ${res.length} results`})
      setreslogs(res)
    }
  }
  const [onsearch, setonsearch] = useState(false)
  return (
    <>
    <Row gutter={[24, 5]}>
      <Col xs={24}>
        <Card
        title={<Row gutter={[24,5]}>
          <Col xs={24}>
          <center style={{ fontWeight: "bold"}}>Appearance Logs</center>
          </Col>
          <Col xs={24} lg={12} className="m-0 p-0">
          <Button type="link" onClick={()=>{setopens(true)}} className={`text-${onsearch? "danger" : "dark"}`}>SEARCH</Button>
          <Drawer
          open={opens}
          title={<center><small>Search Filters</small></center>}
          onClose={()=>{setopens(false)}}
          placement={"top"}
          footer={<center>
            <Col>
            <Button type="danger" style={{ marginRight: 5 }}
            onClick={()=>{ form.resetFields(); setonsearch(false)}}
            >CLEAR</Button>
            <Button type="primary"
            onClick={()=>{
              form.submit()
            }}
            >SEARCH</Button>
            </Col>
          </center>}
          >
            <Form
            form={form}
            initialValues={def}
            onFinish={values=>{ Search(values) }}
            onFinishFailed={err=>{
                notification.warning({
                    message: "Please fill in the form completely and correctly!"
                })
            }}
            layout="vertical"
            >
             <Row gutter={[24, 5]}>
             <Col xs={24} lg={12}>
             <Form.Item
              label={"Date"}
              name={"date"}
              tooltip={""}
              rules={[
              {
                  required: false,
                  message: ``,
              },
              ]}
              >
                <DatePicker placeholder="MM/DD/YYYY" format={"MM/DD/YYYY"}  style={{ width: "100%" }}/>
              </Form.Item>
              <Form.Item
              label={"Time"}
              name={"time"}
              tooltip={""}
              rules={[
              {
                  required: false,
                  message: ``,
              },
              ]}
              >
                <TimePicker placeholder="hh:mm a" format={"hh:mm a"} style={{ width: "100%" }}/>
              </Form.Item>
             </Col>
             <Col xs={24} lg={12}>
             <Form.Item
              label={"Exhibitor"}
              name={"exhibitor"}
              tooltip={""}
              rules={[
              {
                  required: false,
                  message: ``,
              },
              ]}
              >
                <Select
                allowClear
                onSelect={val=>{
                  //console.log(val)
                }}
                >
                  {
                    exh!==null&&exh.map((val, k)=>{
                      return <Select.Option key={k} value={val["_id"]}>
                          <center>
                          {val["Name_of_Firm/Institution"]}
                          </center>
                      </Select.Option>
                    })
                  }
                </Select>
              </Form.Item>
             </Col>
             </Row>
            </Form>
          </Drawer>
          </Col>
          <Col xs={24} lg={12} className="m-0 p-0" >
          <div style={{ float: "right", cursor: "pointer"}} 
          onClick={()=>{
            getLogs({})
            setreslogs(null)
            setonsearch(false)
          }}
          >
          <ReloadOutlined  style={{  color: "blue",  paddingLeft: 10, paddingTop: 5, paddingRight: 3 }}/>
          <small>Load Data</small>
          </div>
          {
            logs!==null?
            <CSVLink
            style={{ float: "right" }}
            headers={headers}
            data={download()}
            filename={"apearance-logs.csv"}
            className="btn btn-primary"
            target="_blank"
          >
            <DownCircleOutlined style={{ color: "green" }}/><small className="text-dark"> Download</small>
          </CSVLink>
          :
          <div 
          style={{  cursor: "pointer", float: "right" }}
          onClick={()=>{
            notification.warning({
              message: "No Data Available"
            })
          }}
          ><DownCircleOutlined style={{ color: "green" }}/><small className="text-dark"> Download</small></div>
          }
          
          </Col>
        </Row>}
        >
          <Badge.Ribbon text={reslogs!==null? reslogs.length : logs!==null? logs.length : "0"} color="red">
        <Col xs={24}>
          <Table
            size="small"
            filterDropdown
            className="ant-list-box table-responsive bg-white"
            sorter
            loading={loading}
            columns={column}
            dataSource={reslogs!==null? reslogs : logs}
            scroll={null}//isMobile? null : { x: 1700, y: 600 }
            pagination={{ pageSize: 100, position: ["bottomLeft"]}}
            />
        </Col>
        </Badge.Ribbon>
        </Card>
      </Col>
    </Row>
    </>
  );
}
