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
        `
        return this.elemnt
     }
} 