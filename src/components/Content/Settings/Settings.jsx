import React, {Component} from "react"
import style from './Settings.module.scss'


export default class Settings extends Component {

   state = {
      theme: 'white',
      language: 'english'
   }

   render() {

      return (
         <div>
            <h3 className={style.blockHeader}>Settings</h3>
            <div className={style.settings}>
               <div>Theme: {this.state.theme}</div>
               <div>Language: {this.state.language}</div>
            </div>
         </div>
      )
   }
}