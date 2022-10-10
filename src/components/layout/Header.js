/* eslint-disable */
import {  useEffect } from "react";
import {
  Row,
  Col,
  Breadcrumb,
  Button
} from "antd";

import { NavLink, Link } from "react-router-dom";
import bg from "../../assets/images/bg.png";
import logos from "../../assets/images/logos.png";
import activity from "../../assets/images/activity.png";
import { isDesktop } from "react-device-detect";
const profile = [
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    key={0}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM12 7C12 8.10457 11.1046 9 10 9C8.89543 9 8 8.10457 8 7C8 5.89543 8.89543 5 10 5C11.1046 5 12 5.89543 12 7ZM9.99993 11C7.98239 11 6.24394 12.195 5.45374 13.9157C6.55403 15.192 8.18265 16 9.99998 16C11.8173 16 13.4459 15.1921 14.5462 13.9158C13.756 12.195 12.0175 11 9.99993 11Z"
      fill="#111827"
    ></path>
  </svg>,
];

const toggler = [
  <svg
    width="20"
    height="20"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    key={0}
  >
    <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
  </svg>,
];

function Header({
  name,
  subName,
  onPress,
  account
}) {
  useEffect(() => window.scrollTo(0, 0));


  return (
    <>
      <Row gutter={[24, 0]}>
        <Col span={24} md={6}>
          
          <Breadcrumb>
            
            <Breadcrumb.Item>
              <NavLink to="/"><img src={bg} width="35%"/></NavLink>
             
            </Breadcrumb.Item>
          </Breadcrumb>
          
          
        </Col>
        <Col span={24} md={18} className="header-control">
          <Button
            type="link"
            className=""//sidebar-toggler
            onClick={() => onPress()}
          >
            {toggler}
          </Button>

          {
            account===null?
            <Link to="/Sign-In" className="btn-sign-in">
              {profile}
              <span>Sign in</span>
            </Link>
            
          :
            <><img src={logos} width={isDesktop?"15%": "35%"} /> <b style={{ marginRight: 15 }}>{account.exhibitor}</b>  </>
          }
        </Col>
         
      </Row>
    </>
  );
}

export default Header;
