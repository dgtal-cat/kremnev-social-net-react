import React, {Component} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import style from './App.module.scss';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Content/Profile/Profile";
import Messages from "./components/Content/Messages/Messages";
import Footer from "./components/Footer/Footer";
import News from "./components/Content/News/News";
import Music from "./components/Content/Music/Music";
import Settings from "./components/Content/Settings/Settings";

export default class App extends Component {

   idGenerator = () => {
      return Math.floor(Math.random()*100000)
   }

   render() {
      return (
         <BrowserRouter>
            <div className={style.app}>
               <Header />
               <div className={style.contentWrapper}>
                  <Sidebar />

                  {/*Content*/}
                  <div className={style.contentContainer}>
                     <div className={style.contentFeed}>
                        <Routes>
                           <Route path='/' element={<Profile />} />
                           <Route path='/profile' element={<Profile />} />
                           <Route path='/messages' element={<Messages idGenerator={this.idGenerator} />} />
                           <Route path='/news' element={<News idGenerator={this.idGenerator} />} />
                           <Route path='/music' element={<Music idGenerator={this.idGenerator} />} />
                           <Route path='/settings' element={<Settings />} />
                        </Routes>
                     </div>
                  </div>
               </div>
               <Footer />
            </div>
         </BrowserRouter>
      );
   }
}