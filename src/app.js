import { MainPage } from "./pages/main/main.js";
import { NotFoundPage } from "./pages/not-found/not-found.js"
import { Favorites } from "./pages/favorites/favorites.js";


class App {

    routes = [
        {
            path: "#search",
            page: MainPage,
        },
        {
            path: "#favorites",
            page: Favorites,
        }
    ]

    appState = {
        favorites: []
    }

	constructor () {
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
        this.currentPage.render() ;
    }
}

new App () 