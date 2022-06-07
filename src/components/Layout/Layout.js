import React from "react";
import style from "./Layout.module.css";
import Sidebar from "../Sidebar/Sidebar";
import {Route,Routes,BrowserRouter} from "react-router-dom";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Support from "../../pages/Support/Support";
import History from "../../pages/History/History";
import Profile from "../../pages/Profile/Profile";
import AuthPage from '../authPage/AuthPage';
const Layout = () => {
  const isLogin = true; 
  return (
    <BrowserRouter>
    {
      isLogin === false &&
        <AuthPage/>
    }

    { isLogin &&
      <div>
            <div>
              <Sidebar />
              <div className={style.layoutContentMain}>
                <div className={style.centeralcontainer}>
                <Routes>
                <Route path="/" exact element={<Dashboard/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/history"  element={<History/>} /> 
      <Route path="/support" element={<Support/>} />
     </Routes>
                </div>
                <div>
                <Profile/>
                </div>
              </div>
            </div>
          </div>
    }
    </BrowserRouter>
  );
};

export default Layout;
