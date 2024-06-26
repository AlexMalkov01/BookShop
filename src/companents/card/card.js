import "./card.css"
import { DivComponent } from "../../common/classes/div-componnent.js"; 


export class Card extends DivComponent {

     constructor (state,appState) {
        super()
        this.state = state
        this.appState = appState
     }  

    render () {
        this.elemnt.innerHTML = "";
        this.elemnt.classList.add("card_wrapper");
        
        for (let book of this.state.bookList) {
            

            const isFovarites = this.appState.favorites.find((el)=> el.key === book.key)

            const card = document.createElement("div")
            card.classList.add("card")
            card.innerHTML = `
            <a  href="#AbautPage">
            <div class="img_wrap">
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" />
            </div>
            </a>
            <div class="title__card">

            <div class="janre__card">
            ${book.subject?.slice(0,2)?.join(" & ") ?? "Не задано"}
            </div>
            
            <div class="name_title__card">
            ${book.title}
            </div>
            <div class="auther__card">
            ${book.author_name?.slice(0,1)?.join(" ")?? "Неизвестный"}
            </div>

            <button ${isFovarites ?`class="btn-white"`:`class="btn-black"`}>
            ${isFovarites ?'<img src="/static/favorite--black.svg" />' 
            :'<img src="/static/favorite--white.svg" />'}

            </button>
            
            </div>
            `

            const addButton = card.querySelector("button");
            addButton.addEventListener("click", () => { 
                if (isFovarites) {
                    this.appState.favorites = this.appState.favorites.filter(el => el.key !== book.key)
                    return 
                }
                this.appState.favorites.push(book);
            });

           
            card.querySelector("a").addEventListener("click",()=> {
            this.appState.searchBookId = book.edition_key[0]
            })

            this.elemnt.append(card)
        }
    return this.elemnt
     }

} 