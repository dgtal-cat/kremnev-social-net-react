import React, {Component} from "react"
import style from './Profile.module.scss'

export default class Profile extends Component {

   render() {

      return (
         <div>
            <h3 className={style.blockHeader}>My profile</h3>
            <div className={style.profile}>
               <div className={style.profileAvatar}>
                  <img src="/src/images/avatars/dgtal_cat/ava.png" alt="avatar"/>
               </div>
               <div className={style.profileInfo}>
                  <div className={style.name}>Алексей Кремнев</div>
                  <div className={style.login}>dgtal_cat</div>
                  <div className={style.age}>Возраст: 34</div>
                  <div className={style.profileDescription}>
                     <h5 className={style.profileDescriptionHeader}>Описание профайла</h5>
                     I study front-end dev, making my first steps. I am open for collaboration to get some real experience!
                  </div>
               </div>
            </div>
         </div>
      )
   }
}