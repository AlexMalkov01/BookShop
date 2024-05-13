import "./pagination.css"
import { DivComponent } from "../../common/classes/div-componnent.js";


export class Pagination extends DivComponent {

     constructor (state) {
        super()
        this.state = state 
     }
     
     #addOffset() {
        this.state.offset+=8
     }

     #remuveOffset() {
        this.state.offset-=8
     }

     render () { 

        this.elemnt.innerHTML = "";
        this.elemnt.classList.add("pagination")
        this.elemnt.innerHTML = `
        <button class="btn-reviy">
        <img src="/static/pagination--left.svg">
        Предыдущая страница
        </button>
        <button class="btn-next">
        Следующая страница
        <img src="/static/pagination--right.svg">
        </button>
        
        `
        if (this.state.offset <= 0) {
            this.elemnt.querySelector(".btn-reviy").classList.add("none")
            this.elemnt.classList.add("flex-end")
        } 
        
        if (this.state.bookList.length < 8)  {
         this.elemnt.querySelector(".btn-next").classList.add("none")
        }
        
        
        this.elemnt.querySelector(".btn-reviy").addEventListener("click", () => this.#remuveOffset());

        this.elemnt.querySelector(".btn-next").addEventListener("click", () => this.#addOffset());

        return this.elemnt
     }
} 