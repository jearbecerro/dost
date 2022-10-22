/* eslint-disable */
import { useEffect, useState } from 'react';
import { Row, Col, Badge, Card, Table, notification, Alert } from 'antd';
import moment from "moment";
import { isMobile } from 'react-device-detect';
import api from '../api/api';
import { QrReader } from 'react-qr-reader';
import useSound from 'use-sound';
import beep from "../assets/audio/beep.mp3"

export function ClaimedPrize({account}){
    const [processing, setprocessing] = useState(false)
    const [play] = useSound(beep);
    const [msg, setmsg] = useState("")

    async function handleDecode(result){
            try {
                setprocessing(true)
                const data = JSON.parse(result)
                let visitor = data.name
                await api.update({
                    db: "RSTW", col: "spin_winners", 
                    query: { _id: data._id },
                    data: { 
                        claimed: true
                    }
                }).then(async (res) => {
                    play();
                    setmsg(`${data.fullname} claimed the prize!.`)
                    await getClaimed()
                    setTimeout(() => {
                        setprocessing(false);
                        setmsg('')
                    }, 2000);
                }).catch(err=>{
                    setprocessing(false)
                    setmsg('Server Error')
                })
            } catch (err) {
                setmsg("Invalid QRCode!")
                setTimeout(()=>{
                    setprocessing(false)
                }, 2000)
            }
        
    } 
    
    function handleScannerLoad(mode){
        console.log(mode);
    }

    const [logs, setlogs] = useState(null)

    async function getClaimed(){
        await api.get({
            db: "RSTW", col: "spin_winners",
            query: { claimed: true }
        }).then(res=>{
            console.log(res.data)
            setlogs(res.data)
        }).catch(err=>{
            console.log(err.message)
            setlogs(null)
        })
    }
    
    useEffect(()=>{
        getClaimed()
    }, [])
    
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
            render: val =>(<>{val.prize}</>)
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
                    scanDelay={2000}
                    style={{ height: 500 }}
                />
            }
            
            </Col>
            </center>
            {
                msg!==""&&<Alert message={msg} type="info" closeText="Close Now" />
            }
            </Col>
            <Col xs={24} >
                <Card style={{}} className="mt-5">
                <Badge.Ribbon text={logs!==null? logs.length : "0"} color="red">
                <b>Claimed Prizes Logs</b> 
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