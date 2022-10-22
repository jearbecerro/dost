/* eslint-disable */
import { Card, Row, Col, Table, Button, Drawer, Form, Input, Select, notification, Badge, DatePicker, TimePicker } from "antd";
import { useState, useEffect } from "react";
import moment from "moment"
import api from "../api/api";
import { DownCircleOutlined, ReloadOutlined } from "@ant-design/icons";
import { CSVLink } from "react-csv";
import { DynamicSearch } from "@jearbecerro/dynamicsearch"
import Search from "antd/lib/transfer/search";

export default function Winners({ account, setaccount }) {

  const [logs, setlogs] = useState(null)
  const [reslogs, setreslogs] = useState(null)
  const [exh, setexh] = useState(null)
  const headers = [
    { label: "Date Won", key: "date" },
    { label: "Fullname", key: "fullame" },
    { label: "Prize", key: "prize" },
    { label: "Claimed", key: "claimedr" }
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
      title:  "DATE WON",
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
        render: val => ( <>{val.fullname}</>)
    },
    {
        title: "PHONE",
        render: val =>(<>{val.phone_number}</>)
    }
    ,
    {
        title: "PRIZE",
        render: val =>(<>{val.prize.split("-")[1]}</>)
    },
    {
        title: "Claimed",
        dataIndex: 'claimed',
        filters: [
          {
            text: 'Claimed',
            value: "true",
          },
          {
            text: 'Not Claimed',
            value: "false"
          }
        ],
        // specify the condition of filtering result
        // here is that finding the name started with `value`
        onFilter: (value, record) => record.claimed.indexOf(value) === 0,
        render: val=>(<>{val==="true"? "Claimed" : "Not Claimed"}</>)
    }
  ]
  const [loading, setloading] = useState(false)
  async function getLogs(query){
    setloading(true)
    await api.get({
        db: "RSTW", col: "spin_winners",
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

  const [onsearch, setonsearch] = useState(false)
  return (
    <>
    <Row gutter={[24, 5]}>
      <Col xs={24}>
        <Card
        title={<Row gutter={[24,5]}>
          <Col xs={24}>
          <center style={{ fontWeight: "bold"}}>Winners Logs</center>
          </Col>
          <Col xs={24}  className="m-0 p-0" >
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
            data={logs}
            filename={"winners-logs.csv"}
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
