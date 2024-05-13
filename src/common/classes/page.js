export class AbstractPage {

    constructor () {
        this.app = document.getElementById("root")
    }
    

    setTitle (title) {
        document.title = title
    }
 
    render() {
        return;
    }

    unmont(){
        return;
    }

    setFavorites(){
        const key = "Alex";
        const favoritesString = JSON.stringify(this.appState.favorites) 
        localStorage.setItem(key, favoritesString)
    } 

}