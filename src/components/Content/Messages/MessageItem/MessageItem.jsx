import React, {Component} from "react"
import style from './MessageItem.module.scss'

export default class MessageItem extends Component {
   render() {
      const {id, date, from, text} = this.props
      return (
         <div className={style.message}>
            <div className={style.id}>id: {id}</div>
            <div className={style.date}>{date}</div>
            <div className={style.from}>{from}</div>
            <div className={style.text}>{text}</div>
         </div>
      );
   }
}