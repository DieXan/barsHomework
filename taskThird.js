const listPapa = document.querySelector("#list")

const foo = (event) => {
    if(event.target.tagName === "LI"){
        console.log(event.target.textContent)
    }
}


listPapa.onclick = foo;