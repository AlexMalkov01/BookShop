import "./header.css" 
import { DivComponent } from "../../common/classes/div-componnent.js";


export class Header extends DivComponent {

     constructor (appState) {
        super()
        this.appState = appState 
     }   

     render () {
        this.elemnt.innerHTML = "";
        this.elemnt.classList.add("header")
        this.elemnt.innerHTML = `
        <div>
        <img  src="../static/header_logo.png" alt="" />
        </div>
        <div class ="menu">
         <a class="menu__link" href="#search" >
         <img src="/static/icon_search.png" class="menu_search">   
         Поиск книг
         </a>
         <a class="menu__link" href="#favorites">
         <img src="/static/favorite_icon.png">
         Избаранное
         </a>
         <div class="menu__counter">
         ${this.appState.favorites.length ? this.appState.favorites.length : "0"}
         </div>
        </div>
        `
        return this.elemnt
     }
} 