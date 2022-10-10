/* eslint-disable */

import AdminHeader from "../components/layout/AdminHeader";

export default function AdminProfile({ account, setaccount }) {


  return (
    <>
    <AdminHeader account={account} setaccount={setaccount} />
    Admin
    </>
  );
}
