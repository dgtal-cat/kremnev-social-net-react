import React, {Component} from "react"
import style from './MusicItem.module.scss'

export default class MusicItem extends Component {

   state = {

   }

   render() {
      const {id, date, title, track} = this.props
      return (
         <div className={style.musicItem}>
            <div className={style.id}>id: {id}</div>
            <div className={style.date}>{date}</div>
            <div className={style.title}>{title}</div>
            <div className={style.track}>{track}</div>
         </div>
      )
   }
}