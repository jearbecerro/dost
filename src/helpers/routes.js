/* eslint-disable */
import  logo from "../assets/images/logo.png";
import qrcodescanner from "../assets/images/qrcodescanner.png";
import registration from "../assets/images/registration.png";
import home from "../assets/images/home.png";
import { QRCodeScanner }  from "../pages/QRCodeScanner";
import { Registration } from "../pages/Registration";
export default function Routes(account){

const pub = [
  {
    label: "Home",
    link: "/",
    icon: home,
    element: <Registration/>
  },
  {
    label: "Registration",
    link: "/Registration",
    icon: registration,
    element: <></>
  },
  {
    label: "Activities",
    link: "/Activities",
    icon: registration,
    element: <></>
  }
]

const prot = [
  {
    label: "QR Code Scanner",
    link: "/QR-Code-Scanner",
    icon: qrcodescanner,
    element: <QRCodeScanner account={account}/>
  },
  {
    label: "Exhibitor Profile",
    link: "/Exhibitor-Profile",
    icon: null,
    element: <></>
  }
]

const su = [
  {
    label: "Exhibitor CMS",
    link: "/Exhibitor-CMS",
    icon: null,
    element: <></>
  },
  {
    label: "",
    link: "/",
    icon: registration,
    element:<Registration/>
  },
  {
    label: "QR Code Scanner",
    link: "/QR-Code-Scanner",
    icon: qrcodescanner,
    element: <QRCodeScanner account={account}/>
  },
  {
    label: "Exhibitor Profile",
    link: "/Exhibitor-Profile",
    icon: null,
    element: <></>
  }
]
return account!==null&&account!==undefined? account.level === "Super Admin"? su : prot : pub
}