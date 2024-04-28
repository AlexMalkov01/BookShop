
import onChange from "on-change";

import { AbstractPage }  from "../../common/classes/page.js";

import { Header } from "../../companents/header/haeder.js"; 

import { Search } from "../../companents/search/search.js";

import { CardList} from "../../companents/card-list/card-list.js";

import { Card } from "../../companents/card/card.js";


export class MainPage extends AbstractPage {

    
    constructor (appState){
        super()
        this.setTitle("Главная странница");
        this.appState = appState
        this.appState = onChange(this.appState , this.appStateHook.bind(this))
        this.state = onChange(this.state, this.searchHook.bind(this))
    }
    
    state = {
        bookList: [],
        isLoading: false,
        searchValue: "",
        offset:null,
    }

    appStateHook(path) {
        if (path === "favorites"){
            this.render()
        }

    }

    async searchHook(path) {
        if (path === "searchValue") {    


            document.querySelector(".load__res").classList.add("none")
            document.querySelector(".load__activ").classList.remove("none")

                const data = await this.getBookList(this.state.searchValue);
                const dataRes = data.docs 
                this.state.bookList =  dataRes 

                console.log(dataRes);
        }

         if (path === "bookList"){
            this.render()
        }

    }

    async getBookList (searchValue) {
        const getData = await fetch(`https://openlibrary.org/search.json?q=${searchValue}`)
        return getData.json()
    }

    render() {
        this.app.innerHTML = ""
        const main = document.createElement("div")
        const cardList = new CardList (this.state).render();
        const searchComponent = new Search(this.state).render();
        const card = new Card(this.state);
        main.innerHTML = `Главная странница`
        main.append(searchComponent)
        main.append(cardList)
        // main.append(card)
        this.renderHaeder()
        this.app.append(main)
    }

    renderHaeder() {
        const header = new Header(this.appState).render()
        console.log(header);
        this.app.prepend(header)
    }

   

}