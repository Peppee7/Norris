let btn = document.querySelector(".button");
let t = document.querySelector(".text");
        let url = "https://api.chucknorris.io/jokes/random"
        let risorsa;


        btn.addEventListener("click", function (e) {
            e.preventDefault()

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