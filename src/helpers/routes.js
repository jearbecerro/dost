/* eslint-disable */
import  logo from "../assets/images/logo.png";
import qrcodescanner from "../assets/images/qrcodescanner.png";
import registration from "../assets/images/registration.png";
import home from "../assets/images/home.png";
import vendor from "../assets/images/vendor.png";
import cms from "../assets/images/cms.png";
import dashboard from "../assets/images/dashboard.png";
import attendance from "../assets/images/attendance.png";
import activity from "../assets/images/activity.png";
import log from "../assets/images/log.png";
import { QRCodeScanner }  from "../pages/QRCodeScanner";
import { Registration } from "../pages/Registration";
import SignIn from "../pages/SignIn";
import Profile from "../pages/Profile";
import Attendance from "../pages/Attendance";
import Exhibitors from "../pages/Exhibitors";
import AdminProfile from "../pages/AdminProfile";
import Prize from "../pages/Prize";
//import Spin2Win from "../pages/Spin2Win";
export default function Routes(account, setaccount){

const pub = [
  {
    label: "Spin2Win",
    link: "/spin2win",
    //notInSidebar: true,
    icon: null,
    element: <Prize />
  },
  {
    label: "Registration",
    link: "/Register",
    icon: registration,
    element: <Registration/>
  },
  {
    label: "Sign In",
    link: "/Sign-In",
    notInSidebar: true,
    icon: null,
    element: <SignIn setaccount={setaccount}/>
  }
]

const prot = [
  {
    label: "My Profile",
    link: "/",
    icon: vendor,
    element: <Profile account={account} setaccount={setaccount}/>
  },
  {
    label: "QR Code Scanner",
    link: "/QR-Code-Scanner",
    icon: qrcodescanner,
    element: <QRCodeScanner account={account} setaccount={setaccount} />
  }
]

const su = [
  {
    label: "Dashboard",
    link: "/",
    icon: dashboard,
    element: <Profile account={account} setaccount={setaccount}/>
  },
  {
    label: "Attendance",
    link: "/attendance",
    icon: attendance,
    element: <Attendance account={account} setaccount={setaccount} />
  }
]
return account!==null&&account!==undefined? account.isAdmin? su : prot : pub
}