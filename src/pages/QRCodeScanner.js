/* eslint-disable */
//import { QrReader } from 'react-qr-reader';
import Scanner from "react-webcam-qr-scanner";
import { useEffect, useState } from 'react';
import { Row, Col, Badge, Card, Table, notification } from 'antd';
import moment from "moment";
import { isMobile } from 'react-device-detect';
import api from '../api/api';
export function QRCodeScanner({account}){
    const [processing, setprocessing] = useState(false)

    async function handleDecode(result){
        console.log(result.data)
        if(processing===false){
            try {
                console.log(result.data)
                setprocessing(true)
                const data = JSON.parse(result.data)
                let visitor = data.First_Name
                await api.add({
                    db: "RSTW", col: "appeared", 
                    data: { 
                        exhibitor: account._id,
                        date: moment().format("MM/DD/YYYY"),
                        time: moment().format("hh:mm a"),
                        appeared: result.data,
                        unique: `${account._id}-${moment().format("MM/DD/YYYY")}-${data._id}`
                    }
                }).then(res=>{
                    const d = res.data
                    if(d.res.insertedId===null){
                        notification.warn({
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
                    }, 3000)
                }).catch(err=>{
                    setprocessing(false)
                    notification.error({
                        message: "Server Error",
                        description: err.message
                    })
                })
            } catch (err) {
                console.log(err.message)
                setTimeout(()=>{
                    setprocessing(false)
                }, 3000)
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
            query: { exhibitor: "test" }
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
    function appeared(val){
        return <>{`${val.First_Name} ${val.Last_Name}`}</>
    }
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
            render: val => (
                appeared(JSON.parse(val.appeared))
            )
        },
        {
            title: "FIRM/INSTITUTION",
            render: val =>(<>{JSON.parse(val.appeared)["Name_of_Firm/Institution"]}</>)
        }
        ,
        {
            title: "SECTOR",
            render: val =>(<>{JSON.parse(val.appeared)["SECTOR"]}</>)
        }
    ]
    return <Row gutter={[24, 1]}>
            <Col xs={24}>
            {
                processing===false&&
                <center>
                <Scanner 
                className="some-classname"
                onDecode={handleDecode}
                onScannerLoad={handleScannerLoad}
                constraints={{ 
                    audio: false, 
                    video: { 
                        width: isMobile? window.innerWidth * .80 : 500,
                        height: isMobile? window.innerHeight * .40 : 500,
                        facingMode: "environment" //user
                    } 
                }}
                captureSize={{ width: 1280, height: 720 }}
                />
                </center>
            }
            </Col>
            {
                /** <QrReader
                scanDelay={100}
                onResult={(result, error) => {
                if (!!result) {
                    console.log(result?.text)
                    setData(result?.text);
                }

                if (!!error) {
                    //console.info(error);
                }
                }}
                videoStyle={{ width:"100%", height: "100%", padding: 0, marginTop: 0, borderBlockColor: "red"  }}
                />
                 */
            }
            <Col xs={24} >
                <Card style={{}} className="mt-5">
                <Badge.Ribbon text={logs!==null? logs.length : ""} color="red">
                <b>Visitors Logs</b>
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