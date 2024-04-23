import { AbstractPage } from "../../common/classes/page.js"

export class NotFoundPage extends AbstractPage {
    
    render() {
        const notFound = document.createElement("div")
        notFound.innerHTML = `Ошибка 404`
        this.app.innerHTML = ""
        this.app.append(notFound) 
    }
}