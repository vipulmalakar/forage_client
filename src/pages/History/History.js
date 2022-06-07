import style from './History.module.css'
import Card from '../../pages/Card/Card'
import Newcard from '../Data/Newcard'
export default function History()
{
    return(
        <>
           <div className={style.historyContainer}>
                <div className={style.titleContainer}>
                    <h3>History</h3>
                </div>
                <div className={style.card}>
                <Card
                    type="ack"
                    title="12-02-2022"
                    name="NGO"
                />
                </div>
           </div> 
        </>
    )
}