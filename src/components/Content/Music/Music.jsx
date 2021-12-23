import React, {Component} from "react"
import style from './Music.module.scss'
import MusicItem from './MusicItem/MusicItem';

export default class Music extends Component {

   state = {
      musicItems: [
         {
            id: this.props.idGenerator(),
            date: '2021-12-19',
            title: 'Track 1',
            track: 'url'
         },
         {
            id: this.props.idGenerator(),
            date: '2021-12-19',
            title: 'Track 2',
            track: 'url'
         },
         {
            id: this.props.idGenerator(),
            date: '2021-12-19',
            title: 'Track 3',
            track: 'url'
         }
      ]
   }

   render() {
      const music = this.state.musicItems.map((item) => {
         return <MusicItem
            key={item.id}
            id={item.id}
            date={item.date}
            title={item.title}
            track={item.track} />
      })

      return (
         <div>
            <h3 className={style.blockHeader}>Music</h3>
            <div className={style.music}>
               {music}
            </div>
         </div>
      )
   }
}