/* eslint-disable */
import "./styles.css";
import React, { useState } from "react";
import { Wheel } from "./components/Roulette";
import { Button, Col } from "antd";
//import { makeStyles, Modal } from "@material-ui/core";
import { getRandomInt } from "./utils";
import { isMobile } from "react-device-detect";
import api from "../../api/api";

//import button from "assets/img/button.png";


export default function Spin2Win({ wheel, pointer, data, winner, setwinner, winning_numbers, spin, setspin, setcongrats, setprize }) {
  /**
   * {
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    paper: {
      position: "absolute",
      width: "70%",
      border: "2px solid #000",
      fontSize: 30,
      textAlign: "center",
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(2, 4, 3)
    },
    wheelContainer: {
      width: "40em",
      height: "40em",
      margin: "0 auto",
      marginTop: "5em",
      position: "relative"
    },
    button: {
      margin: "3em auto",
      display: "block",
      width: "10rem",
      cursor: "pointer"
    }
  }
   */
  
  const [couponNum, setCouponNum] = useState(1);
 
  const onClick = async () => {
    const total = await api.get({
      "db": "RSTW",
      "col": "spin_winners",
      "query": { },
      "data": { }
    }).then(res=>{ console.log(res.data.length); return res.data.length }).catch(err=>{ console.log(err.message); return 0})
    let newCouponNum = getRandomInt(1, Object.keys(data).length - 2);
    if (total===50||total===70||total===90){
      newCouponNum = 8;
    } else if(total===10||total===23||total===32||total===40||total===41){
      newCouponNum = 7;
    } else {
      newCouponNum = getRandomInt(1, Object.keys(data).length - 2);
    }
    setCouponNum(newCouponNum);
    setwinner(winning_numbers.includes(newCouponNum))
    setprize(data[newCouponNum])
    setspin(true);
  };

  return (
    <Col xs={24}>
   
      <div style={
        isMobile?
        {
          width: "20em",
          height: "20em",
          margin: "0 auto",
          marginTop: "5em",
          position: "relative"
        }
        :
        {
          width: "40em",
          height: "40em",
          margin: "0 auto",
          marginTop: "5em",
          position: "relative"
        }
      }>
        <Wheel
          winner={winner}
          wheel={wheel}
          pointer={pointer}
          mustStartSpinning={spin}
          prizeNumber={couponNum}
          count={Object.keys(data).length}
          setcongrats={setcongrats}
          onStopSpinning={() => {
            setspin(false);
          }}
        />
      </div>
      <Button
      style={{
        marginTop: 40,
        margin: "3em auto",
        display: "block",
        width: "10rem",
        cursor: "pointer"
      }}
      danger
      onClick={()=>{onClick()}}
      >
        SPIN NOW
      </Button>
    </Col>
  );
}
