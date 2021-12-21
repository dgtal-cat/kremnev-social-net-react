import React, {Component} from "react"
import style from './Messages.module.scss'

import Message from "./Message/Message"

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
      ]
   }

   render() {

      const messages = this.state.messages.map((item) => {
         return <Message key={item.id} id={item.id} date={item.date} from={item.from} text={item.text} />
      })

      return (
         <div>
            <h3 className={style.blockHeader}>Messages</h3>
            <div className={style.messages}>
               {messages}
            </div>
         </div>
      )
   }
}