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

export default function Routes(account, setaccount){

const pub = [
  {
    label: "Registration",
    link: "/",
    icon: registration,
    element: <Registration/>
  },
  {
    label: "Activities",
    link: "/Activities",
    icon: activity,
    element: <></>
  },
  {
    label: "Sign In",
    link: "/Sign-In",
    notInSidebar: true,
    icon: null,
    element: <SignIn setaccount={setaccount}/>
  },
]

const prot = [
  {
    label: "My Profile",
    link: "/",
    icon: vendor,
    element: <Profile account={account} setaccount={setaccount}/>
  },
  {
    label: "Activities",
    link: "/Activities",
    icon: activity,
    element: <></>
  },
  {
    label: "QR Code Scanner",
    link: "/QR-Code-Scanner",
    icon: qrcodescanner,
    element: <QRCodeScanner account={account} setaccount={setaccount} />
  },
  {
    label: "Logs",
    link: "/Logs",
    icon: log,
    element: <>Logs</>
  }
]

const su = [
  {
    label: "Dashboard",
    link: "/",
    icon: dashboard,
    element: <>Dashboard</>
  },
  {
    label: "Activities",
    link: "/Activities",
    icon: activity,
    element: <></>
  },
  {
    label: "Attendance",
    link: "/attendance",
    icon: attendance,
    element: <>Attendance</>
  },
  {
    label: "Exhibitors",
    link: "/Exhibitors",
    icon: vendor,
    element: <>Exhibitors List</>
  },
  {
    label: "CMS",
    link: "/CMS",
    icon: cms,
    element: <>CMS</>
  }
]
return account!==null&&account!==undefined? account.isAdmin? su : prot : pub
}