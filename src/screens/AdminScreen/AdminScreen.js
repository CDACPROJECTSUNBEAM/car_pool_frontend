import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import UserNavbar from "../../components/UserNavbar/UserNavbar";
import UserFooter from "../../components/UserFooter/UserFooter";
import "./AdminScreen.css";

const AdminScreen = () => {
    const data = useSelector(state => state.userSignin);
  let user = data.response;
  return (
    <>
      <UserNavbar user={user} link={"/admin/home"} />

      <div class="container mt-5">
    <div class="row">
        <div class="col-md-4 col-xl-3">
            <div class="card bg-c-blue order-card">
                <div class="card-block">
                    <h6 class="m-b-20">Total Users</h6>
                    <h2 class="text-right"><i class="fa fa-users" aria-hidden="true"></i>
<span>486</span></h2>
                    <a class="m-b-0">Manage Users</a>
                </div>
            </div>
        </div>
        
        <div class="col-md-4 col-xl-3">
            <div class="card bg-c-green order-card">
                <div class="card-block">
                    <h6 class="m-b-20">Total Drivers</h6>
                    <h2 class="text-right"><i class="fa fa-user" aria-hidden="true"></i><span>486</span></h2>
                    <a class="m-b-0">Manage Drivers</a>
                </div>
            </div>
        </div>
        
        <div class="col-md-4 col-xl-3">
            <div class="card bg-c-yellow order-card">
                <div class="card-block">
                    <h6 class="m-b-20">Total Rides</h6>
                    <h2 class="text-right"><i class="fa fa-car" aria-hidden="true"></i><span>486</span></h2>
                    <a class="m-b-0">Rides Per Month</a>
                </div>
            </div>
        </div>
        
        <div class="col-md-4 col-xl-3">
            <div class="card bg-c-pink order-card">
                <div class="card-block">
                    <h6 class="m-b-20">Total Revenue</h6>
                    <h2 class="text-right"><i class="fa fa-credit-card f-left"></i><span>486</span></h2>
                    <a class="m-b-0" style={{textDecoration: "none", cursor: "default"}}>Revenue Per Month</a>
                </div>
            </div>
        </div>
	</div>
</div>

      <UserFooter />
    </>
  )
}

export default AdminScreen