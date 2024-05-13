
import onChange from "on-change";

import { AbstractPage }  from "../../common/classes/page.js";

import { Header } from "../../companents/header/haeder.js"; 

import { Search } from "../../companents/search/search.js";

import { CardList} from "../../companents/card-list/card-list.js";

import { Card } from "../../companents/card/card.js";

import { Pagination } from "../../companents/pagination/pagination.js";


export class MainPage extends AbstractPage {

    
    constructor (appState){
        super()
        this.setTitle("Главная странница");
        this.appState = appState 
        this.appState = onChange(this.appState , this.appStateHook.bind(this))
        this.state = onChange(this.state, this.searchHook.bind(this))
        console.log(this.appState);
    }
    
    state = {
        bookList: [],
        isLoading: false,
        searchValue: "",
        offset:0,
        limit:8,
    }

    appStateHook(path) {
        if (path === "favorites" || path === "searchBookId"){
            this.setFavorites()
            this.render();
        }

    }

    async searchHook(path) {
        if (path === "searchValue") {    
            this.state.offset = 0

            document.querySelector(".load__res").classList.add("none");
            document.querySelector(".load__activ").classList.remove("none");

                const data = await this.getBookList(this.state.searchValue,this.state.offset,this.state.limit);
                const dataRes = data.docs 

                this.state.bookList =  dataRes 
        } else if (path === "offset") {
                const data = await this.getBookList(this.state.searchValue,this.state.offset,this.state.limit);
                const dataRes = data.docs 

                this.state.bookList =  dataRes 
        }

         if (path === "bookList"){
            this.render()
        }

    }

    async getBookList (searchValue,offset,limit) {
        const getData = await fetch(`https://openlibrary.org/search.json?q=${searchValue}&offset=${offset}&limit=${limit}`)
        return getData.json()
    }

    render() {
        this.app.innerHTML = ""
        const main = document.createElement("div")
        const cardList = new CardList (this.state).render();
        const searchComponent = new Search(this.state).render();
        const card = new Card(this.state, this.appState).render();
        const pagination = new Pagination (this.state).render()
        main.append(searchComponent)
        main.append(cardList)
        main.append(card)

        if (this.state.bookList.length) {
            main.append(pagination)
        }
       
        this.renderHaeder()
        this.app.append(main)
    }

    renderHaeder() {
        const header = new Header(this.appState).render()
        this.app.prepend(header)
    }
    
}
