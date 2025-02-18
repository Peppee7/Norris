let btn = document.querySelector(".button");
let t = document.querySelector(".text");
let cat = document.querySelector(".menu");

let url = "https://api.chucknorris.io/jokes/random"
let risorsa;


btn.addEventListener("click", function (e) {
    e.preventDefault()

    if (cat.value == "N") {
        url = "https://api.chucknorris.io/jokes/random";
    } else if (cat.value == "animale") {
        url = "https://api.chucknorris.io/jokes/random?category=animal";
    } else if (cat.value == "carriera") {
        url = "https://api.chucknorris.io/jokes/random?category=career";
    } else if (cat.value == "celebrita") {
        url = "https://api.chucknorris.io/jokes/random?category=celebrity";
    } else if (cat.value == "sviluppo") {
        url = "https://api.chucknorris.io/jokes/random?category=dev";
    } else if (cat.value == "esplicito") {
        url = "https://api.chucknorris.io/jokes/random?category=explicit";
    } else if (cat.value == "moda") {
        url = "https://api.chucknorris.io/jokes/random?category=fashion";
    } else if (cat.value == "cibo") {
        url = "https://api.chucknorris.io/jokes/random?category=food";
    } else if (cat.value == "storia") {
        url = "https://api.chucknorris.io/jokes/random?category=history";
    } else if (cat.value == "denaro") {
        url = "https://api.chucknorris.io/jokes/random?category=money";
    } else if (cat.value == "film") {
        url = "https://api.chucknorris.io/jokes/random?category=movies";
    } else if (cat.value == "musica") {
        url = "https://api.chucknorris.io/jokes/random?category=music";
    } else if (cat.value == "politico") {
        url = "https://api.chucknorris.io/jokes/random?category=political";
    } else if (cat.value == "religione") {
        url = "https://api.chucknorris.io/jokes/random?category=religion";
    } else if (cat.value == "scienza") {
        url = "https://api.chucknorris.io/jokes/random?category=science";
    } else if (cat.value == "sport") {
        url = "https://api.chucknorris.io/jokes/random?category=sport";
    } else if (cat.value == "viaggio") {
        url = "https://api.chucknorris.io/jokes/random?category=travel";
    }

    risorsa = fetch(url).then(
        function (resp) {
            console.log(risorsa)
            console.log(resp)

            return resp.json()
        }
    ).then(
        function (data) {
            t.innerHTML = data.value;
        }
    ).catch(
        function (err) {
            console.log(err)
        }
    )
})