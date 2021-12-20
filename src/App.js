import React, {Component} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import style from './App.module.scss';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Content/Profile/Profile";
import Messages from "./components/Content/Messages/Messages";
import Footer from "./components/Footer/Footer";

export default class App extends Component {

   idGenerator = () => {
      return Math.floor(Math.random()*1000)
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