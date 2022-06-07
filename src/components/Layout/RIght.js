import Profile from '../../pages/Profile/Profile';
import Edit from '../../pages/Edit/Edit';
import Post from '../../pages/Post/Post';
import { useState } from 'react';
function _renderStepContent(step){
    switch(step){
        case 0: return <Profile/>;
        case 1: return <Edit/>;
        case 2:return <Post/>;
        default: <div>Not Found</div>;
    }
}
function Right(){
    const [activeStep,setActiveStep] = useState(0);
    return(
        <div>
            {
                activeStep === 0 ? <Profile/> : 
                _renderStepContent(activeStep) 
            }
            {/* <Profile/> */}
            {/* <Edit/> */}
            {/* <Post/> */}
        </div>
    )
}
export default Right;