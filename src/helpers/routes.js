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
    link: "/dost/",
    icon: registration,
    element: <Registration/>
  },
  {
    label: "Activities",
    link: "/dost/Activities",
    icon: activity,
    element: <></>
  },
  {
    label: "Sign In",
    link: "/dost/Sign-In",
    notInSidebar: true,
    icon: null,
    element: <SignIn setaccount={setaccount}/>
  },
]

const prot = [
  {
    label: "My Profile",
    link: "/dost/",
    icon: vendor,
    element: <Profile account={account} setaccount={setaccount}/>
  },
  {
    label: "Activities",
    link: "/dost/Activities",
    icon: activity,
    element: <></>
  },
  {
    label: "QR Code Scanner",
    link: "/dost/QR-Code-Scanner",
    icon: qrcodescanner,
    element: <QRCodeScanner account={account} setaccount={setaccount} />
  },
  {
    label: "Logs",
    link: "/dost/Logs",
    icon: log,
    element: <>Logs</>
  }
]

const su = [
  {
    label: "Dashboard",
    link: "/dost/",
    icon: dashboard,
    element: <>Dashboard</>
  },
  {
    label: "Activities",
    link: "/dost/Activities",
    icon: activity,
    element: <></>
  },
  {
    label: "Attendance",
    link: "/dost/attendance",
    icon: attendance,
    element: <>Attendance</>
  },
  {
    label: "Exhibitors",
    link: "/dost/Exhibitors",
    icon: vendor,
    element: <>Exhibitors List</>
  },
  {
    label: "CMS",
    link: "/dost/CMS",
    icon: cms,
    element: <>CMS</>
  }
]
return account!==null&&account!==undefined? account.isAdmin? su : prot : pub
}