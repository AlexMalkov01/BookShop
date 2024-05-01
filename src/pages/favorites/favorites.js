import onChange from "on-change";

import { AbstractPage }  from "../../common/classes/page.js";

import { Header } from "../../companents/header/haeder.js"; 

import { Card } from "../../companents/card/card.js";


export class Favorites extends AbstractPage {

    
    constructor (appState){
        super()
        this.setTitle("favorites");
        this.appState = this.getFavorites () ?? appState
        this.appState = onChange(this.appState , this.appStateHook.bind(this))
    }
    
    appStateHook(path) {
        if (path === "favorites"){
            this.setFavorites()
            this.render()
        }

    }


    render() {
        this.app.innerHTML = ""
        const main = document.createElement("div")
        const card = new Card( { bookList: this.appState.favorites } , this.appState).render();
        main.innerHTML = `<h1>
        Избранные книги
        </h1>`
        main.append(card)
        this.renderHaeder()
        this.app.append(main)
    }

    renderHaeder() {
        const header = new Header(this.appState).render()
        console.log(header);
        this.app.prepend(header)
    }
}