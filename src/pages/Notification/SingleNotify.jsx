import {useState} from 'react';
import style from './SingleNotify.module.css';
import {faKipSign,faStopwatch} from '@fortawesome/free-solid-svg-icons'
import {faSquareCheck} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function SingleNotify(props){
    return <>
    {
        props.type === 'Karma' &&
            <div className={style.karma}>
            <p className={style.side}>12:32:41 04/12/22</p>
           <div className={style.seccontain}>
           <div className={style.iconcontain}>
            <FontAwesomeIcon icon={faKipSign} className={style.iconic} />
            </div>
            <div className={style.contant}>
                <h5>Karma</h5>
                <p>You got a Karma count.</p>
                <p>Keep going!</p>
            </div>
           </div>
            </div>
    }
    {
        props.type === 'Accepted' && <>
        <div className={style.Accept}>
        <p className={style.side}>12:32:41 04/12/22</p>
           <div className={style.seccontain}>
           <div className={style.iconcontain}>
           <FontAwesomeIcon icon={faSquareCheck}  className={style.iconic}/>
            </div>
            <div className={style.contant}>
                <h5>Karma</h5>
                <p>You got a Karma count.</p>
                <p>Keep going!</p>
            </div>
           </div>
</div>
        </>
    }
    {
        props.type === 'Timeout' && <>
        <div className={style.timeout}>
        <p className={style.side}>12:32:41 04/12/22</p>
           <div className={style.seccontain}>
           <div className={style.iconcontain}>
           <FontAwesomeIcon icon={faStopwatch}  className={style.iconic}/>
            </div>
            <div className={style.contant}>
                <h5>Karma</h5>
                <p>You got a Karma count.</p>
                <p>Keep going!</p>
            </div>
           </div>
</div>
        </>
    }
    </>
}