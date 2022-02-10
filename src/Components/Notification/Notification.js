import s from "./Notification.module.css";

export default function Notification({message}){
    return <span className={s.message} >{message}</span>
}