import "./card.css"
import { DivComponent } from "../../common/classes/div-componnent.js"; 


export class Card extends DivComponent {

     constructor (bookList) {
        super()
        this.bookList = bookList
     }  
     
    render () {
        this.elemnt.innerHTML = ""; 

        for (let book of this.bookList) {
            console.log(book.title);
        }
    return this.elemnt
     }

} 