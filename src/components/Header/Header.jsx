import React, {Component} from "react";
import style from './Header.module.scss';
import Logo from "./Logo/Logo";

export default class Header extends Component {
   render() {
      return (
         <div className={style.header}>
            <Logo />
         </div>
      )
   }
}