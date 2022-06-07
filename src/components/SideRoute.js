import style from "../Components/Layout/Layout.module.css";
import Sidebar from "../Components/Sidebar/Sidebar";
import NavRoutes from "../Components/NavRoutes";
import Profile from "../pages/Profile/Profile";
function SideRoute(){
  return (
<div>
            <div>
              <Sidebar />
              <div className={style.layoutContentMain}>
                <div className={style.centeralcontainer}>
                  <NavRoutes />
                </div>
                <div>
                <Profile/>
                </div>
              </div>
            </div>
          </div>
  );
};

export default SideRoute;
