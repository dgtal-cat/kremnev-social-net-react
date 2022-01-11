import React, {Component} from "react"
import style from './ContactItem.module.scss'

export default class ContactItem extends Component {

   render() {
      const {id, active, contactName, lastMessage, select} = this.props
      return (
         <div className={style.contactItem + (active ? ' ' + style.active : '')}
            onClick={select}>
            <div className={style.id}>
               {id}
            </div>
            <div className={style.contactName}>
               {contactName}
            </div>
            <div className={style.lastMessage}>
               {lastMessage}
            </div>
         </div>
      )
   }
}