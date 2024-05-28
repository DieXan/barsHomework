const button1 = document.querySelector("#button1")

const changeColor = () =>{
    const color = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    document.body.style.background  = color;
}

button1.addEventListener("click", changeColor);