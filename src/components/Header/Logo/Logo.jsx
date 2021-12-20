import React, {Component} from "react";
import style from './Logo.module.scss'

export default class Logo extends Component {
   render() {
      return (
         <div className={style.logo}>
            <div className={style.animatedRectangle}>
               logo
            </div>
         </div>
      )
   }
}