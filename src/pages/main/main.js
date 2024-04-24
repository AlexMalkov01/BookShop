
import onChange from "on-change";

import { AbstractPage }  from "../../common/classes/page.js";

import { Header } from "../../companents/header/haeder.js"; 

import { Search } from "../../companents/search/search.js";


export class MainPage extends AbstractPage {

    state = {
        bookList: [],
        isLoading: false,
        searchValue: "",
        offset:null,
    }

    constructor (appState){
        super()
        this.setTitle("Главная странница");
        this.appState = appState
        this.appState = onChange(this.appState , this.appStateHook.bind(this))
        this.state = onChange(this.state, this.searchHook.bind(this))
    }

    appStateHook(path) {
        if (path === "favorites"){
            this.render()
        }
    }

    async searchHook(path) {
        if (path === "searchValue") {
            console.log(path);
        }
    }

    async getBookList (searchValue,offset) {
        const getData = await fetch("https://")
    }

    render() {
        this.app.innerHTML = ""
        const main = document.createElement("div")
        const searchComponent = new Search(this.state).render()
        main.innerHTML = `Главная странница`
        main.append(searchComponent)
        this.renderHaeder()
        this.app.append(main)
    }

    renderHaeder() {
        const header = new Header(this.appState).render()
        console.log(header);
        this.app.prepend(header)
    }

   

}