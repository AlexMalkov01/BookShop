
import onChange from "on-change";

import { AbstractPage }  from "../../common/classes/page.js";

import { Header } from "../../companents/header/haeder.js";


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
    }

    appStateHook(path) {
        if (path === "favorites"){
            this.render()
        }
    }

    render() {
        this.app.innerHTML = ""
        const main = document.createElement("div")
        main.innerHTML = `Главная странница`
        this.app.append(main)
        this.renderHaeder()
    }

    renderHaeder() {
        const header = new Header(this.appState).render()
        this.app.prepend(header)
    }
}