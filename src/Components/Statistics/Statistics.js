import s from './Statistics.module.css'


export default function Statistics({good,neutral,bad,feadback, total}){

   return <div>
   <ul>
    <li className={s.stats}>Good:{good}</li>
    <li className={s.stats}>Neutral:{neutral}</li>
    <li className={s.stats}>Bad:{bad}</li>
    <li className={s.stats}>Total:{total}</li>
    <li className={s.stats}>Positive feadback:{feadback}%</li>
    </ul>
    </div>
}