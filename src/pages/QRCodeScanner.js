/* eslint-disable */
import { useEffect, useState } from 'react';
import { Row, Col, Badge, Card, Table, notification } from 'antd';
import moment from "moment";
import { isMobile } from 'react-device-detect';
import api from '../api/api';
import { QrReader } from 'react-qr-reader';
import useSound from 'use-sound';
import beep from "../assets/audio/beep.mp3"

export function QRCodeScanner({account}){
    const [processing, setprocessing] = useState(false)
    const [play] = useSound(beep);
    async function handleDecode(result){
        if(processing===false){
            try {
                setprocessing(true)
                const data = JSON.parse(result)
                let visitor = data.name
                await api.add({
                    db: "RSTW", col: "appeared", 
                    data: { 
                        exhibitor: account._id,
                        date: moment().format("MM/DD/YYYY"),
                        time: moment().format("hh:mm a"),
                        appeared: result,
                        unique: `${account._id}-${moment().format("MM/DD/YYYY")}-${data._id}`
                    }
                }).then(res=>{
                    const d = res.data
                    play()
                    if(d.res.insertedId===null){
                        
                        notification.info({
                            description: `${visitor} ${d.msg.toLowerCase()}`
                        })
                    } else{

                        notification.success({
                            message: "Scanned & Saved Successfully!",
                            description: `${visitor} appeared in your booth.`
                        })
                    }
                    
                    setTimeout(()=>{
                        setprocessing(false)
                    }, 1000)
                }).catch(err=>{
                    setprocessing(false)
                    notification.error({
                        message: "Server Error",
                        description: err.message
                    })
                })
            } catch (err) {
                notification.error({
                    message: "Invalid QRCode!"
                })
                setTimeout(()=>{
                    setprocessing(false)
                }, 1000)
            }
        } else {
            console.log("still processing")
        }
    } 
    
    function handleScannerLoad(mode){
        console.log(mode);
    }

    const [logs, setlogs] = useState(null)

    async function getLogs(){
        await api.get({
            db: "RSTW", col: "appeared",
            query: { exhibitor: "6341a2a882067e6ea2828b9c", "date": moment().format("MM/DD/YYYY") }
        }).then(res=>{
            console.log(res.data)
            setlogs(res.data)
        }).catch(err=>{
            console.log(err.message)
            setlogs(null)
        })
    }
    useEffect(()=>{
        getLogs()
    }, [])
    
    const column = [
        { 
            width: "15%",
            title:  "DATE APPEARED",
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
            title: "SECTOR",
            render: val =>(<>{JSON.parse(val.appeared)["sector"]}</>)
        }
    ]
    return <Row gutter={[24, 1]}>
            <Col xs={24}>
            <center>
            <Col xs={24} lg={17}>
            {
                processing===false&&
                    <QrReader
                    constraints={{ facingMode: "environment" }}
                    onResult={async (result, error) => {
                    if (result) {
                        await handleDecode(result.text)
                    }

                    if (error) {
                        console.log(error);
                    }
                    }}
                    scanDelay={500}
                    style={{ height: 500 }}
                />
            }
      
            </Col>
            </center>
            </Col>
            <Col xs={24} >
                <Card style={{}} className="mt-5">
                <Badge.Ribbon text={logs!==null? logs.length : ""} color="red">
                <b>Visitors Logs</b> <small hidden>{moment().format("MMMM DD, YYYY")}</small>
                <hr/>
                
                <Table
                size="small"
                filterDropdown
                className="ant-list-box table-responsive bg-white"
                sorter
                loading={logs===null}
                columns={column}
                dataSource={logs}
                scroll={null}//isMobile? null : { x: 1700, y: 600 }
                pagination={{ pageSize: 100, position: ["bottomLeft"]}}
                >
                </Table>
                </Badge.Ribbon>
                </Card>
            </Col>
            <Col>
            </Col>
        </Row> 
}