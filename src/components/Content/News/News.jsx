import React, {Component} from "react"
import style from './News.module.scss'

import NewsItem from './NewsItem/NewsItem'

export default class News extends Component {

   state = {
      newsItems: [
         {
            id: this.props.idGenerator(),
            date: '2021-12-17',
            title: 'Заголовок новости 1',
            text: 'Текст новости. Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
               'Aliquid dolores eligendi maxime sed voluptates. Architecto commodi doloribus' +
               'earum eius exercitationem illo, nam nostrum possimus quia sed. Beatae facilis nostrum praesentium!',
            likes: 0,
            dislikes: 0
         },
         {
            id: this.props.idGenerator(),
            date: '2021-12-19',
            title: 'Заголовок новости 2',
            text: 'Текст новости. Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
               'Aliquid dolores eligendi maxime sed voluptates. Architecto commodi doloribus' +
               'earum eius exercitationem illo, nam nostrum possimus quia sed. Beatae facilis nostrum praesentium!',
            likes: 0,
            dislikes: 0
         },
         {
            id: this.props.idGenerator(),
            date: '2021-12-20',
            title: 'Заголовок новости 3',
            text: 'Текст новости. Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
               'Aliquid dolores eligendi maxime sed voluptates. Architecto commodi doloribus' +
               'earum eius exercitationem illo, nam nostrum possimus quia sed. Beatae facilis nostrum praesentium!',
            likes: 0,
            dislikes: 0
         }
      ]
   }

   render() {
      const news = this.state.newsItems.map((item) => {
         return <NewsItem
            key={item.id}
            id={item.id}
            date={item.date}
            title={item.title}
            text={item.text}
            likes={item.likes}
            dislikes={item.dislikes} />
      })
      return (
         <div>
            <h3 className={style.blockHeader}>News</h3>
            <div className={style.news}>
               {news}
            </div>
         </div>
      )
   }
}