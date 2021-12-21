import React, {Component} from "react"
import style from './NewsItem.module.scss'

export default class NewsItem extends Component {

   state = {

   }

   render() {
      const {id, date, title, text, likes, dislikes} = this.props
      return (
         <div className={style.newsItem}>
            <div className={style.id}>id: {id}</div>
            <div className={style.date}>{date}</div>
            <div className={style.title}>{title}</div>
            <div className={style.text}>{text}</div>
            <div className={style.trending}>
               <div className={style.likes}>Likes: {likes}</div>
               <div className={style.dislikes}>Dislikes: {dislikes}</div>
            </div>
         </div>
      )
   }
}