/* eslint-disable */
import "./styles.css";
import React, { useState } from "react";
import { Wheel } from "./components/Roulette";
import { Button } from "antd";
//import { makeStyles, Modal } from "@material-ui/core";
import { getRandomInt } from "./utils";
import { isMobile } from "react-device-detect";

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
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const onClick = () => {
    const newCouponNum = getRandomInt(1, Object.keys(data).length);
    setCouponNum(newCouponNum);
    setwinner(winning_numbers.includes(newCouponNum))
    setprize(data[newCouponNum])
    setspin(true);
  };

  return (
    <div>
   
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
            handleOpen();
          }}
        />
      </div>
      <Button
      style={{
        margin: "3em auto",
        display: "block",
        width: "10rem",
        cursor: "pointer"
      }}
      onClick={()=>{onClick()}}
      >
        SPIN NOW
      </Button>
    </div>
  );
}
