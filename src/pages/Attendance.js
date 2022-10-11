/* eslint-disable */
import { Card, Row, Col, Table, Button, Drawer, Form, Input, Select, notification, Badge } from "antd";
import { useState, useEffect } from "react";
import AdminHeader from "../components/layout/AdminHeader";
import moment from "moment"
import api from "../api/api";
import { DownCircleOutlined } from "@ant-design/icons";
import { CSVLink } from "react-csv";
export default function Attendance({ account, setaccount }) {

  const [logs, setlogs] = useState(null)
  const [reslogs, setreslogs] = useState(null)

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
            Date: `${val.date} ${val.time}`, Name: JSON.parse(val.appeared).Name, "Firm/Institution": val["Name_of_Firm/Institution"],
            Exhibitor: val.exhibitor_name
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
        title: "EXHIBITOR",
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
        console.log(res.data)
        setlogs(JSON.stringify(res.data)==="[]"? null : res.data)
        setloading(false)
    }).catch(err=>{
        console.log(err.message)
        setlogs(null)
        setloading(false)
    })
  }
  useEffect(()=>{
      getLogs({})
  }, [])

  const [opens, setopens] = useState(true)
  const [form] = Form.useForm()
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
          <Button type="link" onClick={()=>{setopens(true)}} className="text-dark">SEARCH</Button>
          <Drawer
          open={opens}
          title={<center><small>Search Filters</small></center>}
          onClose={()=>{setopens(false)}}
          placement={"top"}
          footer={<center>
            <Col>
            <Button type="danger" style={{ marginRight: 5 }}
            onClick={()=>{ form.resetFields()}}
            >CLEAR</Button>
            <Button type="primary">SEARCH</Button>
            </Col>
          </center>}
          >
            <Form
            form={form}
            initialValues={{}}
            onFinish={values=>{}}
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
                <Input placeholder="MM/DD/YYYY"/>
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
                <Input placeholder="hh:mm a"/>
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
                <Select>

                </Select>
              </Form.Item>
             </Col>
             </Row>
            </Form>
          </Drawer>
          </Col>
          <Col xs={24} lg={12} className="m-0 p-0" >
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
          <Badge.Ribbon text={logs!==null? logs.length : reslogs!==null? reslogs.length : "0"} color="red">
        <Col xs={24}>
          <Table
            size="small"
            filterDropdown
            className="ant-list-box table-responsive bg-white"
            sorter
            loading={loading}
            columns={column}
            dataSource={logs}
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
