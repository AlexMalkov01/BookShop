import { MainPage } from "./pages/main/main.js";
import { NotFoundPage } from "./pages/not-found/not-found.js"
import { Favorites } from "./pages/favorites/favorites.js";
import { AbautPage } from "./pages/abaut-page/abaut-page.js";


class App {

    routes = [
        {
            path: "",
            page: MainPage,
        },
        {
            path: "#favorites",
            page: Favorites,
        },
        {
            path: "#AbautPage",
            page: AbautPage,
        }
    ]

    appState = {
        favorites: this.#getFavorites() ?? [],
        searchBookId: 2,
    }

	constructor () {
        console.log(this.appState.favorites);
        window.addEventListener("hashchange", this.route.bind(this));
        this.route()
	}

    route () {
        const page = this.routes.find((route)=> route.path === location.hash)?.page;
        if (!page) {
        this.currentPage = new NotFoundPage();
        this.currentPage.render();
        return
        }
        this.currentPage = new page(this.appState);
        this.currentPage.render();
    }

    
    #getFavorites() {
        const key = "Alex";     
        console.log(JSON.parse(localStorage.getItem(key)));
        return JSON.parse(localStorage.getItem(key)) 
    }


}

new App () 