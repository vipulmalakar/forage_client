// import { Link } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import demo from "./logo192.png";
import style from './Profile.module.css'
import { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import Edit from '../../pages/Edit/Edit';
import Post from '../../pages/Post/Post';
import EditIcon from '@mui/icons-material/Edit';
import Notification from "../Notification/Notification";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
function _renderStepContent(step){
  switch(step){
      case 0: return <Profile/>;
      case 1: return <Edit/>;
      case 2:return <Post/>;
      case 3:return <Notification/>;
      default: <div>Not Found</div>;
  }
}
const Profile = () => {
  const [activeStep,setActiveStep] = useState(0);
  // let navigation = useNavigate();
  // let history = useHistory();
  return (
    <>
    {
      activeStep === 0 ?     <div className={style.profilecontainer}>
      <div className={style.infosection}>
        <img className={style.imgsection} src={demo} alt="not found" />
        <h3 className={style.namesection}>Karun Mourya</h3>
      </div>
          <div className={style.karma}>
            <div  >
              <p >Karma Count</p>
              <p >3</p>
            </div>
            <div >
              <p>Acc. Status</p>
              <p >Activated</p>
            </div>
          </div>

      <div className={style.linkcontainer}>
          <div className={style.setting}>
          <button onClick={()=>setActiveStep(1)} ><SettingsApplicationsIcon style={{fontSize:30}}/> Account Setting</button>
          </div>
          <div className={style.notify}>
          <button onClick={()=>setActiveStep(3)}><NotificationsActiveIcon style={{fontSize:30}}/> Notifications</button>
          </div>
          <div className={style.post}>
            <h3>Create your post</h3>
            <p>
            Fill in the information about food you have.
            </p>
            
            <button className={style.edit} type="submit" onClick={()=>setActiveStep(2)}>
              <EditIcon/>
            </button>
          </div>
      </div>
    </div>
 : <div className={style.Back}>
 <button onClick={()=>setActiveStep(0)} >
          <ChevronLeftIcon />
        </button>
  {
          _renderStepContent(activeStep) 
}    
      </div>
  }
  </>
    );
};
export default Profile;
