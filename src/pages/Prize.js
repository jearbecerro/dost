/* eslint-disable */
import { Col, Modal } from "antd";
import Spin2Win from "../components/Spin2Win/Spin2Win";

import wheel from '../assets/img/wheel.png'
import pointer from '../assets/img/pointer.png'
import pointer1 from '../assets/img/pointer1.png'

import { useState } from "react";
const data = {
    1: "White Robot",
    2: "Black Ball",
    3: "Amazon 3",
    4: "$ Gold 4",
    5: "-25%",
    6: "Clap2x Red",
    7: "Ear Buds",
    8: "Black Robot",
    9: "Amazon 9",
    10: "$ Gold 10",
    11: "-15%",
    12: "Clap2x Black",
  };

export default function Prize({}){
    const [spin, setspin] = useState(false)
    const [winner, setwinner] = useState(false)

    return <>
    <Modal
    closable={false}
    title={null}
    footer={null}
    open={true}
    width="100%"
    >
    <center>
      <Spin2Win
      wheel={wheel}
      pointer={pointer}
      data={data}
      spin={spin}
      setspin={setspin}
      winner={winner}
      setwinner={setwinner}
      winning_numbers={[1,4,3]}
      />
      </center>
    </Modal>
    </>
}