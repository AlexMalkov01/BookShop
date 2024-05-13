import onChange from "on-change";

import { AbstractPage }  from "../../common/classes/page.js";

import { Header } from "../../companents/header/haeder.js"; 



export class AbautPage extends AbstractPage {

    state = {
        book:null,
        isLoading: false,
    }

    
    constructor (appState){
        super()
        this.setTitle("abautPage");
        this.appState = appState
        this.appState = onChange(this.appState , this.appStateHook.bind(this))
        this.state = onChange(this.state, this.steteHook.bind(this))
        console.log(this.appState);
        this.#setBookData()
    }
    
    appStateHook(path) {
        if (path === "favorites"){
            this.setFavorites()
            this.render()
        }

    }

    steteHook(path) {
        if (path === "isLoading") {
            this.render()
        }
    }

    async #setBookData() {
        this.state.isLoading = true;
        const book = await this.#loadBook();
        this.state.book = book;
        this.state.isLoading = false;
    }

    async #loadBook() {
        console.log(this.appState.searchBookId);
        const data = await fetch(`https:openlibrary.org/books/${this.appState.searchBookId}.json`)
        return data.json()
    }


    render() {
        this.app.innerHTML = ""
        const main = document.createElement("div")
        main.innerHTML = `<h1>
        ${this.state.isLoading ? "Загрузка..." : this.state.book.title ?? "О книге"} 
        </h1>
        Описание :
        ${this.state.book.description}
        `
        
        this.renderHaeder()
        this.app.append(main)
    }

    renderHaeder() {
        const header = new Header(this.appState).render()
        this.app.prepend(header)
    }
}