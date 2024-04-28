import "./card-list.css"
import { DivComponent } from "../../common/classes/div-componnent.js"; 


export class CardList extends DivComponent {

     constructor (state) {
        super()
        this.state = state 
     }   

     render () {
        this.elemnt.innerHTML = "";
        this.elemnt.classList.add("cardList")
        this.elemnt.innerHTML = `
        <h1>
        Количество книг -
        <span class="load__res">${this.state.bookList.length}</span>
        <span class="load__activ none">Загрузка...</span>
        </h1>
        `
        return this.elemnt
     }
} 