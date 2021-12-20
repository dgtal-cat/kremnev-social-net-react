import React, {Component} from "react";
import style from './Sidebar.module.scss'

import {NavLink} from "react-router-dom";

export default class Sidebar extends Component {
   render() {
      return (
         <div className={style.sidebar}>
            <ul className={style.mainMenuList}>
               <li><NavLink className={style.menuItem} to='/profile'>Profile</NavLink></li>
               <li><NavLink className={style.menuItem} to='/messages'>Messages</NavLink></li>
               <li><NavLink className={style.menuItem} to='/news'>News</NavLink></li>
               <li><NavLink className={style.menuItem} to='/music'>Music</NavLink></li>
               <li><NavLink className={style.menuItem} to='/settings'>Settings</NavLink></li>
            </ul>
         </div>
      )
   }
}