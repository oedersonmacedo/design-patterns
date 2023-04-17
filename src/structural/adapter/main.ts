import ExpressHttp from "./ExpressHttp";
import HapiHttp from "./HapiHttp";
import Http from "./Http";

function init(http: Http) {
    http.route("get", "/books", function(params: any, body: any) {
        const books = [
            { title: "Clean Code" },
            { title: "Refactoring" },
            { title: "Implementing Domain-Driven Design" }
        ]
        console.log(books);
        
        return books;
    })
    http.listen(3005);
}

init(new ExpressHttp());