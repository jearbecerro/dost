/* eslint-disable */
import { Layout, Row, Col } from "antd";
import { NavLink } from "react-router-dom";
import moment from "moment";
import logos from "../../assets/images/logos.png"
function Footer() {
  const { Footer: AntFooter } = Layout;

  return (
    <AntFooter style={{ background: "#fafafa" }}>
      <Row className="just" style={{ float: "center" }}>
        <Col xs={24} >
          <div className="copyright">
            © {moment().format("YYYY")} RSTW, 
             | 
            <a href="https://caraga.dost.gov.ph" className="font-weight-bold" target="_blank" rel="noreferrer">
              DOST Caraga
            </a>
            <img src={logos} width="10%" />
          </div>
        </Col>
        <Col xs={24} md={12} lg={12} hidden>
          <div className="footer-menu">
            <Row>

            </Row>
            <ul>
              <li className="nav-item">
               
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </AntFooter>
  );
}

export default Footer;
