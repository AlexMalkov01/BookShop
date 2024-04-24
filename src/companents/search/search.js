import { DivComponent } from "../../common/classes/div-componnent.js";
import "./search.css"


export class Search extends DivComponent {

    constructor(state){
        super()
        this.state = state
    }

    onSearch(){
        const value = document.querySelector("input").value
        this.state.searchValue = value
    }

    render () {
        this.elemnt.innerHTML = "";
        this.elemnt.classList.add("search")
        this.elemnt.innerHTML = `
        <div class="search__wrapper">
        <img src="/static/search_input.svg" class="aicon__input" />
        <input 
        value="${this.state.searchValue ?? ""}"
        type="text" 
        placeholder="Найти книгу или автора....">
        <button class="search__button">
        <img src="../../../static/search_button.svg">
        </button>
        </div>
        `
        this.elemnt.querySelector(".search__button").addEventListener("click", this.onSearch.bind(this))
        this.elemnt.querySelector("input").addEventListener("keydown", (event)=>{
            if(event.code === "Enter")this.onSearch()
        })
        return this.elemnt
    }
    
}