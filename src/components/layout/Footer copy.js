import { Layout, Row, Col } from "antd";
import { NavLink } from "react-router-dom";
import moment from "moment";

function Footer() {
  const { Footer: AntFooter } = Layout;

  return (
    <AntFooter style={{ background: "#fafafa" }}>
      <Row className="just" style={{ float: "center" }}>
        <Col xs={24} md={12} lg={12}>
          <div className="copyright">
            © {moment().format("YYYY")} RSTW, 
             | 
            <a href="https://caraga.dost.gov.ph" className="font-weight-bold" target="_blank" rel="noreferrer">
              DOST Caraga, 
            </a>
            MISU
          </div>
        </Col>
        <Col xs={24} md={12} lg={12}>
          <div className="footer-menu">
            <Row>

            </Row>
            <ul>
              <li className="nav-item">
                <NavLink to="/"  className="nav-link text-muted">
                  DOST
                </NavLink>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </AntFooter>
  );
}

export default Footer;
