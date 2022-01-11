import React, {Component} from "react"
import style from './Messages.module.scss'

import MessageItem from "./MessageItem/MessageItem"
import ContactItem from "./ContactItem/ContactItem";

export default class Messages extends Component {

   state = {
      messages: [
         {
            id: this.props.idGenerator(),
            date: '2021-12-17',
            from: 'Сумасшедшая белка',
            text: 'Привет! Как делища?? Идем тусить в эти выхи?))'
         },
         {
            id: this.props.idGenerator(),
            date: '2021-12-19',
            from: 'Железный человек',
            text: 'Опять небось филонишь? Разработчиками просто так не рождаются, дружище) Время фигачить!'
         }
      ],
      contacts: [
         {
            id: this.props.idGenerator(),
            active: true,
            contactName: 'Сумасшедшая белка',
            lastMessage: 'Привет! Как делища?? Идем тусить в эти выхи?))'
         },
         {
            id: this.props.idGenerator(),
            active: false,
            contactName: 'Железный человек',
            lastMessage: 'Опять небось филонишь? Разработчиками просто так не рождаются, дружище) Время фигачить!'
         }
      ]
   }

   onSelect = (id) => {
      this.setState(({contacts}) => {
         const newContacts = contacts.map((item) => {
            if (item.id === id) {
               return {
                  ...item,
                  active: true
               }
            } else return {
               ...item,
               active: false
            }
         })
         return {
            ...this.state,
            contacts: newContacts
         }
      })
   }

   render() {

      const messages = this.state.messages.map(item => {
         return <MessageItem
                  key={item.id}
                  id={item.id}
                  date={item.date}
                  from={item.from}
                  text={item.text} />
      })

      const contacts = this.state.contacts.map(item => {
         return <ContactItem
                  key={item.id}
                  id={item.id}
                  active={item.active}
                  contactName={item.contactName}
                  lastMessage={item.lastMessage}
                  select={() => this.onSelect(item.id)} />
      })

      return (
         <div>
            <h3 className={style.blockHeader}>Messages</h3>
            <div className={style.rowWrapper}>
               <div className={style.contacts}>
                  {contacts}
               </div>
               <div className={style.messages}>
                  {messages}
               </div>
            </div>
         </div>
      )
   }
}
